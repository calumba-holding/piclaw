# Coverage summary: core/config + secure/keychain

- Command: `./scripts/audit-core-config-keychain-coverage.sh`
- Targeted test log: `artifacts/add-tests-core-config-and-keychain/targeted-test-output.log`
- Merged LCOV report: `runtime/coverage/lcov.info`
- Component LCOV reports:
  - `artifacts/add-tests-core-config-and-keychain/base.lcov.info`
  - `artifacts/add-tests-core-config-and-keychain/config-import.lcov.info`
  - `artifacts/add-tests-core-config-and-keychain/keychain-import.lcov.info`

| Module | Lines hit | Lines found | Line coverage |
| --- | ---: | ---: | ---: |
| `src/core/config.ts` | 438 | 447 | 97.99% |
| `src/secure/keychain.ts` | 182 | 184 | 98.91% |

- Combined uncovered lines: 11
