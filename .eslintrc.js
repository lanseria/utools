module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-undef": "off",
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
