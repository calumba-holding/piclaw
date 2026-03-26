import * as config from "../../src/core/config.js";

const requested = (process.env.PICLAW_CONFIG_EXPORTS || "")
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean);

const values = config as Record<string, unknown>;

function serialize(value: unknown): unknown {
  if (typeof value === "number" && Number.isNaN(value)) {
    return { type: "number", value: "NaN" };
  }
  if (value instanceof RegExp) {
    return { type: "regexp", source: value.source, flags: value.flags };
  }
  return value;
}

const output = Object.fromEntries(
  requested.map((name) => {
    if (!(name in values)) {
      throw new Error(`Unknown config export requested: ${name}`);
    }
    return [name, serialize(values[name])];
  })
);

console.log(JSON.stringify(output));
