# Coverage summary: core/config + secure/keychain

- Command: `PICLAW_DB_IN_MEMORY=1 bun test --max-concurrency=1 test/config/config.test.ts test/keychain.test.ts --coverage --coverage-reporter=lcov`
- Targeted test log: `artifacts/add-tests-core-config-and-keychain/targeted-test-output.log`
- LCOV report: `runtime/coverage/lcov.info`

| Module | Lines hit | Lines found | Line coverage |
| --- | ---: | ---: | ---: |
| `src/core/config.ts` | 422 | 438 | 96.35% |
| `src/secure/keychain.ts` | 149 | 183 | 81.42% |

- Combined uncovered lines: 50
