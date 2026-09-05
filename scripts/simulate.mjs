import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

const FORBIDDEN_KEYS = /(?:api.?key|access.?code|authorization|cookie|credential|password|private.?key|secret|session|token)/i;
const FORBIDDEN_VALUES = /(?:-----BEGIN [A-Z ]*PRIVATE KEY-----|\bsk-[A-Za-z0-9_-]{20,}|\bgh[pousr]_[A-Za-z0-9]{30,}|\bAKIA[0-9A-Z]{16}|\bxox[baprs]-[A-Za-z0-9-]{10,}|\b(?:sk|rk)_live_[A-Za-z0-9]{16,}|\bglpat-[A-Za-z0-9_-]{16,}|\bBearer\s+[A-Za-z0-9._~+/-]{16,}|https?:\/\/|\b0x[a-fA-F0-9]{40}\b|\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b|\+?[0-9][0-9 ()-]{8,}[0-9])/i;

const SCENARIO_KEYS = new Set([
  "scenarioId",
  "mode",
  "currency",
  "scenarioType",
  "observations",
  "constraints"
]);
const OBSERVATION_KEYS = new Set(["kind", "itemCode", "quantity"]);
const CONSTRAINT_KEYS = new Set(["budgetMinor", "maxOptions"]);
const ITEM_CODES = new Set(["RICE_5KG", "COOKING_OIL_1L", "LAUNDRY_SOAP_BAR"]);

function assertRecord(value, path) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`${path} must be an object`);
  }
}

function assertExactKeys(value, allowed, path) {
  assertRecord(value, path);
  for (const key of Object.keys(value)) {
    if (!allowed.has(key)) {
      throw new Error(`Unknown field rejected at ${path}.${key}`);
    }
  }
}

function assertPublicSafe(value, path = "input") {
  if (typeof value === "string" && FORBIDDEN_VALUES.test(value)) {
    throw new Error(`Secret-like value rejected at ${path}`);
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) => assertPublicSafe(item, `${path}[${index}]`));
    return;
  }

  if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      if (FORBIDDEN_KEYS.test(key)) {
        throw new Error(`Forbidden field rejected at ${path}.${key}`);
      }
      assertPublicSafe(child, `${path}.${key}`);
    }
  }
}

export function simulateScenario(scenario) {
  assertExactKeys(scenario, SCENARIO_KEYS, "input");

  if (scenario?.mode !== "synthetic") {
    throw new Error("Only synthetic scenarios are accepted");
  }

  if (!/^synthetic-(?:shop-walk|demo)-[0-9]{3}$/.test(scenario.scenarioId)) {
    throw new Error("scenarioId must use an approved synthetic identifier");
  }

  if (scenario.currency !== "NGN") {
    throw new Error("Only the synthetic NGN fixture is supported");
  }

  if (scenario.scenarioType !== "RESTOCK_REVIEW") {
    throw new Error("Only the RESTOCK_REVIEW simulation is supported");
  }

  if (!Array.isArray(scenario.observations) || scenario.observations.length < 1 || scenario.observations.length > 20) {
    throw new Error("Between 1 and 20 synthetic observations are required");
  }

  scenario.observations.forEach((observation, index) => {
    const path = `input.observations[${index}]`;
    assertExactKeys(observation, OBSERVATION_KEYS, path);
    if (observation.kind !== "inventory_note") {
      throw new Error(`${path}.kind must be inventory_note`);
    }
    if (!ITEM_CODES.has(observation.itemCode)) {
      throw new Error(`${path}.itemCode is not an approved synthetic item`);
    }
    if (!Number.isSafeInteger(observation.quantity) || observation.quantity < 1 || observation.quantity > 1000) {
      throw new Error(`${path}.quantity must be an integer between 1 and 1000`);
    }
  });

  assertExactKeys(scenario.constraints, CONSTRAINT_KEYS, "input.constraints");

  const budgetMinor = scenario.constraints?.budgetMinor;
  if (!Number.isSafeInteger(budgetMinor) || budgetMinor < 0) {
    throw new Error("budgetMinor must be a non-negative safe integer");
  }

  const maxOptions = scenario.constraints.maxOptions;
  if (!Number.isSafeInteger(maxOptions) || maxOptions < 1 || maxOptions > 5) {
    throw new Error("maxOptions must be an integer between 1 and 5");
  }

  assertPublicSafe(scenario);

  return {
    scenarioId: scenario.scenarioId,
    accepted: true,
    synthetic: true,
    currency: scenario.currency,
    observationCount: scenario.observations.length,
    budgetMinor,
    evaluation: {
      reproducible: true,
      networkCalls: 0,
      productionConnections: 0,
      decision: "READY_FOR_SYNTHETIC_REVIEW"
    }
  };
}

async function main() {
  const fixturePath = process.argv[2];
  if (!fixturePath) {
    throw new Error("Usage: node scripts/simulate.mjs <fixture.json>");
  }

  const fixture = await readFile(fixturePath, "utf8");
  if (Buffer.byteLength(fixture) > 32 * 1024) {
    throw new Error("Fixture exceeds the 32 KB safety limit");
  }

  const scenario = JSON.parse(fixture);
  process.stdout.write(`${JSON.stringify(simulateScenario(scenario), null, 2)}\n`);
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  main().catch((error) => {
    process.stderr.write(`${error.message}\n`);
    process.exitCode = 1;
  });
}
