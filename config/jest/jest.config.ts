const config = {
  clearMocks: true,

  testMatch: [
    "<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)",
  ],

  rootDir: "../../",

  coveragePathIgnorePatterns: [
    "\\\\node_modules\\\\",
  ],

  moduleDirectories: [
    "node_modules",
  ],

  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node",
  ],

  testEnvironment: "jsdom",

  modulePaths: ["<rootDir>src"],

  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy'
  },

  "setupFilesAfterEnv": [
    "<rootDir>config/jest/setupTests.ts"
  ]
};

export default config;
