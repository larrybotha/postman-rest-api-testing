module.exports = {
  runner: 'jest-runner-newman',

  testMatch: ['<rootDir>/tests/**/*.test.js'],

  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
