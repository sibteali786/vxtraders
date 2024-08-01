module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "/build/"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts", "!**/node_modules/**", "!**/build/**", "!**/jest.config.js"],
};
