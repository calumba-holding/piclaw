#!/usr/bin/env bash
# scripts/docker/install-agent-runtime.sh – Install Homebrew, Bun, and pi globally.
#
# Installs bun under /usr/local/lib/bun (via BUN_INSTALL). The directory is
# root-owned and world-readable so all users can run bun/pi/piclaw.
# All `bun add -g` calls use sudo to write into the system prefix.
set -euo pipefail

DEFAULT_BREW_REMOTE="https://github.com/Homebrew/brew.git"
DEFAULT_CORE_REMOTE="https://github.com/Homebrew/homebrew-core.git"
DEFAULT_BUN_VERSION=""

choose_remote() {
  local fallback="$1"
  local raw="$2"
  local normalized remote

  if [ -n "$raw" ]; then
    normalized=$(printf '%s\n' "$raw" | tr ',;' '\n')
    while IFS= read -r remote; do
      remote=$(printf '%s' "$remote" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')
      if [ -z "$remote" ]; then
        continue
      fi
      if git ls-remote "$remote" HEAD >/dev/null 2>&1; then
        printf '%s\n' "$remote"
        return 0
      fi
      echo "Skipping unreachable Homebrew remote: $remote" >&2
    done <<<"$normalized"
  fi

  if git ls-remote "$fallback" HEAD >/dev/null 2>&1; then
    printf '%s\n' "$fallback"
    return 0
  fi

  echo "Fallback Homebrew remote $fallback is unreachable." >&2
  return 1
}

resolve_bun_platform() {
  local raw_arch="${BUN_ARCH:-${TARGETARCH:-$(uname -m)}}"
  case "$raw_arch" in
    amd64|x86_64)
      echo "linux-x64"
      ;;
    arm64|aarch64)
      echo "linux-aarch64"
      ;;
    armv7l|armv7)
      echo "linux-armv7l"
      ;;
    *)
      echo "linux-$raw_arch"
      ;;
  esac
}

supports_avx2() {
  grep -qi 'avx2' /proc/cpuinfo
}

resolve_bun_version() {
  local bun_version="${BUN_VERSION:-}"

  if [ -z "$bun_version" ]; then
    for version_file in /tmp/BUN_VERSION "$HOME/piclaw/BUN_VERSION"; do
      if [ -f "$version_file" ]; then
        bun_version="$(tr -d '[:space:]' < "$version_file")"
        [ -n "$bun_version" ] && break
      fi
    done
  fi

  bun_version="${bun_version#v}"
  bun_version="${bun_version#bun-v}"

  if [ -n "$bun_version" ]; then
    echo "$bun_version"
    return 0
  fi

  echo "BUN_VERSION is not set and no pinned BUN_VERSION file was found." >&2
  return 1
}

install_bun_release() (
  bun_version="$1"
  bun_target="$2"
  temp_dir="$(mktemp -d)"
  trap 'rm -rf "$temp_dir"' EXIT

  filename="bun-${bun_target}.zip"
  base_url="https://github.com/oven-sh/bun/releases/download/bun-v${bun_version}"
  url="${base_url}/${filename}"
  bundle="$temp_dir/$filename"
  checksums="$temp_dir/SHASUMS256.txt"

  if ! curl -fsSL --fail "$url" -o "$bundle"; then
    echo "Unable to download Bun archive: $url" >&2
    return 1
  fi

  if ! curl -fsSL --fail "${base_url}/SHASUMS256.txt" -o "$checksums"; then
    echo "Unable to download Bun checksum manifest for bun-v${bun_version}" >&2
    return 1
  fi

  expected_checksum=$(awk -v name="$filename" '$2 == name { print $1; exit }' "$checksums")
  if [ -z "$expected_checksum" ]; then
    echo "Missing checksum entry for $filename in SHASUMS256.txt" >&2
    return 1
  fi

  actual_checksum=$(sha256sum "$bundle" | awk '{print $1}')
  if [ "$actual_checksum" != "$expected_checksum" ]; then
    echo "Checksum mismatch for $filename" >&2
    echo "Expected: $expected_checksum" >&2
    echo "Actual:   $actual_checksum" >&2
    return 1
  fi

  if ! unzip -q "$bundle" -d "$temp_dir/extract"; then
    echo "Unable to extract Bun archive for $bun_target" >&2
    return 1
  fi

  # Bun archives use a "bun-<target>" directory inside the zip.
  # Support both "bun-<target>/bun" and bare "<target>/bun" layouts.
  bun_binary=""
  for candidate in "$temp_dir/extract/bun-${bun_target}/bun" "$temp_dir/extract/${bun_target}/bun"; do
    if [ -f "$candidate" ]; then
      bun_binary="$candidate"
      break
    fi
  done

  if [ -z "$bun_binary" ]; then
    echo "Unexpected Bun archive layout for $bun_target" >&2
    ls -la "$temp_dir/extract/" >&2
    return 1
  fi

  sudo mkdir -p "$BUN_INSTALL/bin"
  sudo cp "$bun_binary" "$BUN_INSTALL/bin/bun"
  sudo chmod 755 "$BUN_INSTALL/bin/bun"
)

install_bun() {
  local bun_platform
  local bun_version
  local bun_prefer_baseline="${BUN_PREFER_BASELINE:-auto}"
  local -a candidates

  bun_platform=$(resolve_bun_platform)
  bun_version=$(resolve_bun_version)

  if [ "$bun_platform" = "linux-x64" ]; then
    case "$bun_prefer_baseline" in
      always|true|1)
        candidates=("linux-x64-baseline")
        ;;
      never|false|0)
        candidates=("linux-x64")
        ;;
      *)
        if supports_avx2; then
          candidates=("linux-x64" "linux-x64-baseline")
        else
          candidates=("linux-x64-baseline")
        fi
        ;;
    esac
  else
    candidates=("$bun_platform")
  fi

  for bun_target in "${candidates[@]}"; do
    if install_bun_release "$bun_version" "$bun_target"; then
      if "$BUN_INSTALL/bin/bun" --version >/dev/null 2>&1; then
        return 0
      fi
      echo "Installed Bun ${bun_target} failed validation; trying next candidate" >&2
    fi
  done

  echo "Could not install a compatible Bun binary for platform '$bun_platform' (version '$bun_version')." >&2
  return 1
}

BREW_REMOTE=$(choose_remote "$DEFAULT_BREW_REMOTE" "${HOMEBREW_BREW_GIT_REMOTES:-}")
CORE_REMOTE=$(choose_remote "$DEFAULT_CORE_REMOTE" "${HOMEBREW_CORE_GIT_REMOTES:-}")
export HOMEBREW_BREW_GIT_REMOTE="$BREW_REMOTE"
export HOMEBREW_CORE_GIT_REMOTE="$CORE_REMOTE"

BREW_INSTALL_SCRIPT="$(mktemp)"
curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh -o "$BREW_INSTALL_SCRIPT"
/bin/bash "$BREW_INSTALL_SCRIPT"
rm -f "$BREW_INSTALL_SCRIPT"

if ! grep -Fq '/home/linuxbrew/.linuxbrew/bin/brew shellenv' "$HOME/.bashrc"; then
  echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> "$HOME/.bashrc"
fi
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"

for attempt in 1 2 3 4 5; do
  if brew update; then
    break
  fi
  if [ "$attempt" -eq 5 ]; then
    echo "Homebrew update failed after retries." >&2
    exit 1
  fi
  sleep $((attempt * 5))
done

brew install lazygit

# Install Bun globally under /usr/local/lib/bun (root-owned, world-readable)
export BUN_INSTALL="/usr/local/lib/bun"
sudo mkdir -p "$BUN_INSTALL"
install_bun

# Ensure world-readable so all users can run bun
sudo chmod -R a+rX "$BUN_INSTALL"

# Symlink bun/bunx into /usr/local/bin
sudo ln -sf "$BUN_INSTALL/bin/bun"  /usr/local/bin/bun
if [ -f "$BUN_INSTALL/bin/bunx" ]; then
  sudo ln -sf "$BUN_INSTALL/bin/bunx" /usr/local/bin/bunx
else
  sudo ln -sf "$BUN_INSTALL/bin/bun" /usr/local/bin/bunx
fi

# Install pi-coding-agent globally (sudo so it writes to root-owned prefix).
# Prefer an explicit env override, otherwise derive the version from piclaw's
# package.json so Docker builds, reloads, and local installs stay aligned.
PI_CODING_AGENT_VERSION="${PI_CODING_AGENT_VERSION:-}"
if [ -z "$PI_CODING_AGENT_VERSION" ]; then
  for pkg in /tmp/piclaw-package.json "$HOME/piclaw/package.json"; do
    if [ -f "$pkg" ]; then
      PI_CODING_AGENT_VERSION="$(jq -r '.dependencies["@mariozechner/pi-coding-agent"] // empty' "$pkg")"
      [ -n "$PI_CODING_AGENT_VERSION" ] && break
    fi
  done
fi
PI_CODING_AGENT_VERSION="${PI_CODING_AGENT_VERSION:-0.58.3}"
sudo BUN_INSTALL="$BUN_INSTALL" "$BUN_INSTALL/bin/bun" add -g "@mariozechner/pi-coding-agent@${PI_CODING_AGENT_VERSION}"

# Ensure world-readable after install
sudo chmod -R a+rX "$BUN_INSTALL"

# Symlink pi into /usr/local/bin
sudo ln -sf "$BUN_INSTALL/bin/pi" /usr/local/bin/pi

PI_CLI="$(readlink -f "$BUN_INSTALL/bin/pi")"
if [ -f "$PI_CLI" ] && head -n1 "$PI_CLI" | grep -q 'env node'; then
  sudo sed -i '1s/env node/env bun/' "$PI_CLI"
fi
sudo chmod +x "$PI_CLI"
