# Public Boundary

## Allowed

- The public company definition and a short problem statement.
- A high-level product direction and qualified impact statement.
- Fictional scenarios created specifically for this repository.
- Generic input and output examples that do not mirror private wire formats.
- Small evaluation utilities written only for this public simulation.
- Public-source attribution required by a hackathon.
- The gated public application URL without credentials or private access steps.

## Excluded

- Any file or commit copied from the private Simiri repositories.
- Production source, history, database models, API schemas, prompts, model settings,
  scoring logic, state machines, evidence rules, security controls, or runbooks.
- Proprietary algorithms, ranking or decision rules, unpublished inventions,
  patentable implementation details, or methods that enable product replication.
- Provider adapters, contract source, wallet logic, memory logic, deployment files,
  environment files, infrastructure identifiers, or private endpoints.
- Real customer, merchant, transaction, media, financial, operational, or test data
  derived from production systems.
- Credentials, secrets, access codes, private keys, tokens, cookies, or signed URLs.
- Design source, UI assets, or frontend implementation owned by the Design task.
- Private roadmap dates, internal progress scores, costs, usage, business metrics,
  partner discussions, or unannounced commercial terms.

## Release Gate

Before changing this repository from private to public:

1. Confirm the Git history begins in this standalone repository and has no imported
   commits from private Simiri repositories.
2. Run the full test and a history-aware secret scan.
3. Review every tracked file against the excluded list above.
4. Confirm all examples are synthetic and all external claims cite public sources.
5. Confirm the hackathon's publication and license rules are acceptable.
6. Confirm the disclosure does not harm any intended patent, design, trademark,
   confidentiality, or other IP filing strategy; obtain professional advice when
   the answer is uncertain.
7. Obtain explicit founder approval for the exact reviewed commit.

If any check is uncertain, the repository remains private.
