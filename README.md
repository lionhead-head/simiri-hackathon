# Simiri Hackathon Showcase

Simiri is a direct commerce network coordinated by agents.

Simiri helps people and small businesses turn everyday financial and commerce
context into clear, useful action. Its first agent is designed to understand
personal money, business records and direct merchant activity without turning
the merchant relationship into a closed marketplace.

This repository is a public-safe, runnable showcase for hackathon review. It
demonstrates one deliberately narrow synthetic commerce flow without exposing
Simiri's production application, private architecture, prompts, provider access,
customer data, merchant data or credentials.

## Status

**Private staging. Not approved for public release.**

Publication requires the checks in [Public Boundary](docs/PUBLIC_BOUNDARY.md) and
founder approval of the exact final commit. The gated pilot application is at
[app.simiri.xyz](https://app.simiri.xyz); judge access must be shared privately,
never committed here.

## The problem

Small businesses often carry useful operational knowledge in conversations,
paper notes and memory. Buyers also lack reusable context when making repeat
purchases. Important details are fragmented, difficult to verify and rarely
turned into durable intelligence that helps the next decision.

## The product direction

Simiri coordinates financial context and direct commerce while keeping each
source responsible for its own facts. The product direction combines:

- a financial and economic agent for personal and business context;
- direct coordination between buyer demand and merchant supply;
- explicit user review before consequential actions;
- reusable, permissioned intelligence from verified outcomes.

This is the public product story, not a disclosure of the private implementation.

## Review in 60 seconds

Node.js 20 or newer is required. The showcase has no third-party dependencies
and makes no network calls.

```bash
npm test
npm run demo
```

The test suite proves that the harness accepts only its bounded synthetic format
and rejects unexpected fields, private free text, production-like identifiers
and common credential or personal-data patterns. The demo then evaluates the
fictional Shop Walk fixture and returns a small, reproducible result.

## What this demonstrates

- A deterministic, dependency-free simulation that makes no network calls.
- Synthetic input validation before any evaluation runs.
- Rejection of unknown fields, production-like IDs, and common credential or PII patterns.
- A small output contract that judges can inspect and reproduce locally.
- Clear separation between public demonstration code and the gated product.

## What judges can evaluate

- **Idea quality:** one agent connects financial understanding with direct
  commerce rather than operating as a generic assistant or marketplace.
- **Implementation quality:** the runnable slice is deterministic, tested,
  bounded and honest about what is synthetic.
- **Potential impact:** the direction targets fragmented records and repeated
  commerce decisions for people and small businesses.
- **Safety discipline:** no production data, credentials, private source or live
  provider access is needed to review this repository.

See the [Judge Brief](docs/JUDGE_BRIEF.md) for the evidence boundary and a short
evaluation path. The final submission must also map to the named hackathon's
exact track and sponsor requirements.

## What is not included

- Production Simiri source code or Git history.
- Wallet, payment, merchant, agent, model, memory, or deployment implementations.
- System prompts, private schemas, state machines, security controls, or runbooks.
- Real users, merchants, transactions, recordings, images, or provider responses.
- API keys, access codes, tokens, addresses, environment files, or credentials.

The example fixture is intentionally fictional. The automatic guard is defense
in depth, not a replacement for the manual release review required by the public
boundary.

## Rights

Copyright 2026 Simiri. All rights reserved. No license is granted by this staging
repository. Public visibility allows people to view and fork the repository on
GitHub; it does not grant permission to reuse, distribute or create derivative
works. Any license required by a hackathon must be reviewed and approved before
publication.
