const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});
const nextConfig = {
  ...withNextra(),
  output: 'export',
  basePath: "/avi-docs",
  images: {
    unoptimized: true,
  },
}
module.exports = nextConfig