/**
 * @type {import('next').NextConfig}
 */

const nextConfig = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  basePath: "/avi-docs",
})


module.exports = nextConfig