// Configurações do commitizen pesonalizado

"use strict";

module.exports = {
  types: [
    { value: "feat", name: "🚀 feat: Nova Função" },
    { value: "fix", name: "🐞 fix: Bug Fix Resolve" },
    { value: "refactor", name: "🔍 refactor: Uma alteração que melhora o código" },
    { value: "docs", name: "📚 docs: Arquivos de Documentação" },
    { value: "style", name: "💅 style: Alterações de (espaço em branco, formatação, ponto e vírgula ausente..)" },
    { value: "static", name: "👒 static: Adição, alterações, removção de arquivos estáticos (Ex: css,sass,js,html..)" },
    { value: "ci", name: "📂 ci: Alterações em nossos arquivos e scripts de configuração de CI/CID Docker Shell" },
    { value: "deprecated", name: "🚫 deprecated: Remoção de alguma função" },
    { value: "perf", name: "💪 perf: Uma mudança de código que melhora o desempenho" },
    { value: "tests", name: "🦴 tests: Adicionando arquivos de testes ausentes" },
    { value: "build", name: "🍍 build: Alterações que afetam o sistema de compilação ou dependências externas (Ex: gulp, broccoli, npm)" },
    { value: "chore", name: "⌛ chore: Alterações que não adicionam feature ou corrige um bug" },
    { value: "revert", name: "⏪ revert:   Reverter um Commit Anterior" },
    { value: "ui-components", name: "🐧 ui-components: Alterações em componentes do UI/UX" },
    { value: "vulnerability", name: "🔓 vulnerability: Resolvendo uma vulnerabilidade" },
  ],

  scopes: [
    { name: "Servidor Nodejs" },
    { name: "Web Next.js" },
    { name: "Aplicação Desktop" },
    { name: "Aplicação Administrativa" },
    { name: "Aplicação de Suporte" },
    { name: "Aplicação Móvel" },
    { name: "Aplicação de Ecormerce" },
    { name: "Banco de Dados" },
    { name: "Api Nest.js" },
    { name: "Monorepo" },
  ],

  messages: {
    type: "Selecione o tipo de alteração que você está realizando:",
    scope: "\nEscopo desta alteração:",
    customScope: "Indique o Escopo desta alteração:",
    ticketNumber: "Inclua o número do item no Jira (opcional):",
    subject: "Escreva uma descrição breve e imperativa da alteração:\n",
    body: "Forneça uma descrição mais longa da alteração.\n",
    breaking: "Liste as alterações que quebrarão o código (opcional):\n",
    footer: "Liste quaisquer PROBLEMAS FECHADOS por esta alteração (opcional). Ex: #31, #34:\n",
    confirmCommit: "Você está certo que deseja fazer o commit abaixo?",
  },

  allowTicketNumber: true,
  isTicketNumberRequired: false,
  ticketNumberPrefix: "ONIX-",
  ticketNumberRegExp: "\\d{1,5}",

  breakingPrefix: "🚧 BREAKING CHANGES 🚧",

  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix", "deprecated", "revert", "vulnerability"],

  footerPrefix: "CLOSES ISSUE:",

  // limit subject length
  subjectLimit: 100
};
