module.exports = {
  preset: "ts-jest",
  collectCoverageFrom: ["src/**/*.ts"],
  moduleNameMapper: {
    "^@lanseria/utools(.*)$": "<rootDir>/src$1",
  },
  transform: {
    "\\.[jt]s?$": "ts-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!lodash-es/.*)"],
  testMatch: ["**/test/**/*.spec.ts"],
};
