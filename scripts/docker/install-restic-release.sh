#!/usr/bin/env bash
# scripts/docker/install-restic-release.sh – Install a pinned official restic release.
set -euo pipefail

resolve_restic_arch() {
  local raw_arch="${RESTIC_ARCH:-${TARGETARCH:-$(uname -m)}}"
  case "$raw_arch" in
    amd64|x86_64)
      echo "linux_amd64"
      ;;
    arm64|aarch64)
      echo "linux_arm64"
      ;;
    armv7l|armv7)
      echo "linux_arm"
      ;;
    386|i386|i686)
      echo "linux_386"
      ;;
    *)
      echo "Unsupported restic architecture: $raw_arch" >&2
      return 1
      ;;
  esac
}

resolve_restic_version() {
  local restic_version="${RESTIC_VERSION:-}"
  local script_dir repo_version_file
  script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
  repo_version_file="$(cd -- "$script_dir/../.." && pwd)/RESTIC_VERSION"

  if [ -z "$restic_version" ]; then
    for version_file in /tmp/RESTIC_VERSION "$HOME/piclaw/RESTIC_VERSION" "$repo_version_file"; do
      if [ -f "$version_file" ]; then
        restic_version="$(tr -d '[:space:]' < "$version_file")"
        [ -n "$restic_version" ] && break
      fi
    done
  fi

  restic_version="${restic_version#v}"

  if [ -n "$restic_version" ]; then
    printf '%s\n' "$restic_version"
    return 0
  fi

  echo "RESTIC_VERSION is not set and no pinned RESTIC_VERSION file was found." >&2
  return 1
}

install_restic_release() {
  local restic_version="$1"
  local restic_target="$2"
  local install_dir="${RESTIC_INSTALL_DIR:-/usr/local/bin}"
  local temp_dir
  temp_dir="$(mktemp -d)"

  local filename="restic_${restic_version}_${restic_target}.bz2"
  local base_url="https://github.com/restic/restic/releases/download/v${restic_version}"
  local url="${base_url}/${filename}"
  local bundle="$temp_dir/$filename"
  local checksums="$temp_dir/SHA256SUMS"
  local expected_checksum
  local actual_checksum

  trap "rm -rf '$temp_dir'" RETURN

  curl -fsSL --fail "$url" -o "$bundle"
  curl -fsSL --fail "${base_url}/SHA256SUMS" -o "$checksums"

  expected_checksum=$(awk -v name="$filename" '$2 == name { print $1; exit }' "$checksums")
  if [ -z "$expected_checksum" ]; then
    echo "Missing checksum entry for $filename in SHA256SUMS" >&2
    return 1
  fi

  actual_checksum=$(sha256sum "$bundle" | awk '{print $1}')
  if [ "$actual_checksum" != "$expected_checksum" ]; then
    echo "Checksum mismatch for $filename" >&2
    echo "Expected: $expected_checksum" >&2
    echo "Actual:   $actual_checksum" >&2
    return 1
  fi

  mkdir -p "$install_dir"
  bunzip2 -c "$bundle" > "$install_dir/restic"
  chmod 0755 "$install_dir/restic"
}

main() {
  local restic_version restic_target
  restic_version="$(resolve_restic_version)"
  restic_target="$(resolve_restic_arch)"

  install_restic_release "$restic_version" "$restic_target"
  "${RESTIC_INSTALL_DIR:-/usr/local/bin}/restic" version >/dev/null
}

main "$@"
