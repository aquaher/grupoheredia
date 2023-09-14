/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    config.resolve.modules.push(path.resolve('./'))

    return config;
  }, 
  i18n: {
    locales: [ 'en', 'es'],
        defaultLocale: 'es',
     localeDetection: false,
    
},
  
  

}

module.exports = nextConfig


