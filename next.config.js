
const nextConfig = {
  
};

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  ...nextConfig
})

module.exports = withNextra()
