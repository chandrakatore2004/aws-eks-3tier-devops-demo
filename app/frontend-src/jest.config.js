/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    globals: {
      'ts-jest': {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      }
    },
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(ts|mjs|html)$': ['ts-jest', {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.html$',
      }],
    },
    transformIgnorePatterns: [
      'node_modules/(?!(jest-test|other-esm-lib)/)' // allow ESM libs to be transformed
    ],
    moduleFileExtensions: ['ts', 'html', 'js', 'json'],
    moduleNameMapper: {
      '^@app/(.*)$': '<rootDir>/src/app/$1',
    }
  };
  