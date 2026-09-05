# Simiri Hackathon Simulation

Simiri is a direct commerce network coordinated by agents.

This repository is a public-safe simulation for hackathon review. It demonstrates
how a synthetic commerce scenario can be accepted and evaluated without exposing
Simiri's production application, private architecture, prompts, provider access,
customer data, merchant data, or credentials.

## Status

**Private staging. Not approved for public release.**

Publication requires the checks in [Public Boundary](docs/PUBLIC_BOUNDARY.md) and
founder approval of the final repository contents.

## What this demonstrates

- A deterministic, dependency-free simulation that makes no network calls.
- Synthetic input validation before any evaluation runs.
- Rejection of unknown fields, production-like IDs, and common credential or PII patterns.
- A small output contract that judges can inspect and reproduce locally.

## What is not included

- Production Simiri source code or Git history.
- Wallet, payment, merchant, agent, model, memory, or deployment implementations.
- System prompts, private schemas, state machines, security controls, or runbooks.
- Real users, merchants, transactions, recordings, images, or provider responses.
- API keys, access codes, tokens, addresses, environment files, or credentials.

## Run locally

Node.js 20 or newer is required. No package installation is needed.

```bash
npm run demo
npm test
```

The example fixture is intentionally fictional and contains no production data.
The automatic guard is defense in depth, not a replacement for the manual release
review required by the public boundary.

## Rights

Copyright 2026 Simiri. All rights reserved. No license is granted by this staging
repository. Any license required by a future hackathon must be reviewed and
approved before publication.
