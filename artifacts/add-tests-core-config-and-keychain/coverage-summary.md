# Coverage summary: core/config + secure/keychain

- Command: `./scripts/audit-core-config-keychain-coverage.sh`
- Targeted test log: `artifacts/add-tests-core-config-and-keychain/targeted-test-output.log`
- Normalized merged LCOV report: `runtime/generated/coverage/lcov.info`
- Coverage exclusions: `artifacts/add-tests-core-config-and-keychain/coverage-exclusions.json`
- Component LCOV reports:
  - `artifacts/add-tests-core-config-and-keychain/base.lcov.info`
  - `artifacts/add-tests-core-config-and-keychain/config-import.lcov.info`
  - `artifacts/add-tests-core-config-and-keychain/keychain-import.lcov.info`

Normalization excludes raw LCOV entries for blank lines, punctuation-only structural lines, and template-literal content lines that are not independently executable source statements.

| Module | Lines hit | Lines found | Line coverage | Excluded lines |
| --- | ---: | ---: | ---: | ---: |
| `src/core/config.ts` | 451 | 451 | 100% | 55 |
| `src/secure/keychain.ts` | 151 | 151 | 100% | 33 |

- Combined uncovered lines: 0
