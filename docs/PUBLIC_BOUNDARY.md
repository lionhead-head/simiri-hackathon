# Public Boundary

## Allowed

- The public company definition and a short problem statement.
- Fictional scenarios created specifically for this repository.
- Generic input and output examples that do not mirror private wire formats.
- Small evaluation utilities written only for this public simulation.
- Public-source attribution required by a hackathon.

## Excluded

- Any file or commit copied from the private Simiri repositories.
- Production source, history, database models, API schemas, prompts, model settings,
  scoring logic, state machines, evidence rules, security controls, or runbooks.
- Provider adapters, contract source, wallet logic, memory logic, deployment files,
  environment files, infrastructure identifiers, or private endpoints.
- Real customer, merchant, transaction, media, financial, operational, or test data
  derived from production systems.
- Credentials, secrets, access codes, private keys, tokens, cookies, or signed URLs.
- Design source, UI assets, or frontend implementation owned by the Design task.

## Release Gate

Before changing this repository from private to public:

1. Confirm the Git history begins in this standalone repository and has no imported
   commits from private Simiri repositories.
2. Run the full test and a history-aware secret scan.
3. Review every tracked file against the excluded list above.
4. Confirm all examples are synthetic and all external claims cite public sources.
5. Confirm the hackathon's publication and license rules are acceptable.
6. Obtain explicit founder approval for the exact reviewed commit.

If any check is uncertain, the repository remains private.

