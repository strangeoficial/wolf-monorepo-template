/*
  Aqui é as configurações do commitlint que é um lint de commits,
  ele vai verificar se o commit segue esse padrõa abaixo.
*/
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2, "always", [
        "feat", "fix", "docs", "refactor", "style", "chore", "static", "ci", "deprecated",
        "perf", "tests", "build", "revert", "ui-components", "vulnerability"
      ],
    ],
    "subject-case": [
      2, "always", ["sentence-case", "start-case", "pascal-case", "upper-case", "camel-case", "lower-case"]
    ]
  },
  parserPreset: {
    parserOpts: {
      issuePrefixes: ["#"],
    }
  },
};
