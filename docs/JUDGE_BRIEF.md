# Judge Brief

## One-line product

Simiri is a direct commerce network coordinated by agents.

## Why it matters

People and small businesses make financial and commerce decisions using facts
spread across conversations, notes, purchases and merchant systems. Simiri's
product direction is to turn permissioned context and verified outcomes into
useful intelligence for the next decision while preserving direct merchant
relationships.

## What this repository proves

The included code proves a narrow public claim:

1. A fictional Shop Walk restock scenario can be expressed in a bounded format.
2. Unexpected fields, private free text, credentials and production-like input
   are rejected before evaluation.
3. The accepted scenario produces deterministic JSON without dependencies,
   network access or production connections.
4. Seven tests make those boundaries reproducible for a judge.

The public execution path is intentionally simple:

```text
synthetic fixture -> strict validation -> deterministic evaluation -> bounded result
```

## Fast evaluation

```bash
npm test
npm run demo
```

A successful review shows seven passing tests followed by a result with:

- `accepted: true`;
- `synthetic: true`;
- `networkCalls: 0`;
- `productionConnections: 0`;
- `decision: READY_FOR_SYNTHETIC_REVIEW`.

## Common judging criteria

### Idea quality

The product connects financial understanding and direct commerce in one focused
agent experience. It is not presented as a general assistant, bank or closed
marketplace.

### Implementation quality

The reviewable code is small enough to inspect completely. It uses exact input
keys, allowlisted values, bounded sizes, safe integers, deterministic output and
tests for its most important rejection paths.

### Potential impact

The direction addresses fragmented records and repeated decisions for people and
small businesses, where better context can improve bookkeeping, inventory and
purchase choices.

### Honest evidence

The repository distinguishes demonstrated behavior from product direction. It
does not use synthetic output as evidence that a production integration, user
outcome or merchant transaction occurred.

## Deliberate public boundary

This repository does not disclose production source, private architecture,
prompts, model settings, schemas, scoring logic, provider adapters, wallet or
payment logic, memory implementation, infrastructure, security runbooks, customer
data, merchant data, credentials, UI source or private Git history.

The gated application may be demonstrated separately using judge credentials
shared through an approved private channel. Those credentials must never appear
in a submission, repository, screenshot caption, issue or recording.

## Event-specific check

Hackathon criteria and license rules are event-specific. Before submission, the
final reviewed commit must be checked against the named event's eligibility,
build-period, track, sponsor-technology, source-visibility, demo-video and license
requirements. If a rule requires disclosure beyond this public boundary, Simiri
must choose a different track or obtain a specific founder decision before
publishing more.
