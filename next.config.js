const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});
const nextConfig = {
  ...withNextra(),
  images: {
    unoptimized: true,
  },
}
module.exports = nextConfig