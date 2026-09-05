import assert from "node:assert/strict";
import test from "node:test";

import { simulateScenario } from "../scripts/simulate.mjs";

const SYNTHETIC_SCENARIO = {
  scenarioId: "synthetic-demo-999",
  mode: "synthetic",
  currency: "NGN",
  scenarioType: "RESTOCK_REVIEW",
  observations: [{ kind: "inventory_note", itemCode: "RICE_5KG", quantity: 1 }],
  constraints: { budgetMinor: 10000, maxOptions: 1 }
};

test("accepts a synthetic scenario without network access", () => {
  const result = simulateScenario(SYNTHETIC_SCENARIO);

  assert.equal(result.accepted, true);
  assert.equal(result.evaluation.networkCalls, 0);
  assert.equal(result.evaluation.productionConnections, 0);
});

test("rejects a scenario that is not marked synthetic", () => {
  assert.throws(
    () => simulateScenario({ ...SYNTHETIC_SCENARIO, mode: "production" }),
    /Only synthetic scenarios/
  );
});

test("rejects secret-like fields before evaluation", () => {
  assert.throws(
    () => simulateScenario({ ...SYNTHETIC_SCENARIO, apiKey: "not-a-real-key" }),
    /Unknown field/
  );
});

test("rejects production-like scenario identifiers", () => {
  assert.throws(
    () => simulateScenario({ ...SYNTHETIC_SCENARIO, scenarioId: "order_prod_12345" }),
    /approved synthetic identifier/
  );
});

test("rejects unknown nested fields that could carry private data", () => {
  const scenario = structuredClone(SYNTHETIC_SCENARIO);
  scenario.observations[0].customerName = "Private Person";

  assert.throws(() => simulateScenario(scenario), /Unknown field/);
});

test("rejects arbitrary item text instead of accepting private free text", () => {
  const scenario = structuredClone(SYNTHETIC_SCENARIO);
  scenario.observations[0].itemCode = "PERSON_NAME_OR_PRIVATE_ITEM";

  assert.throws(() => simulateScenario(scenario), /approved synthetic item/);
});

test("rejects arbitrary scenario types", () => {
  assert.throws(
    () => simulateScenario({ ...SYNTHETIC_SCENARIO, scenarioType: "PRODUCTION_ORDER" }),
    /RESTOCK_REVIEW/
  );
});
