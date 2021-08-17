module.exports =  {
 setupFilesAfterEnv: ["<rootDir>/src/setuptests.js"],
 testPathIgnorePatterns:["<rootDir>/node_modules/"],
 collectCoverage: true,
 testRegex: "/*.test.js$",
 collectCoverageFrom: [
  "src/**/*.{js,jsx}",
  "!**/node_modules/**",
  "!**/vendor/**"
  
],
 coverageReporters:["lcov"]
}