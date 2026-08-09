export default {
  resolve: {
    alias: {
      "bun:test": "vitest",
    },
  },
  test: {
    include: ["tests/unit/**/*.test.ts"],
  },
};
