module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [0, 'always', 100],
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'chore', 'docs', 'style', 'refactor', 'perf', 'test', 'Merge'],
    ],
    'subject-case': [0, 'never'],
  },
  ignores: [(commit) => /^merge/i.test(commit)], // Ignore merge commits
};
