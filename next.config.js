/** @type {import('next').NextConfig} */

const path = require("path");

const withTM = require('next-transpile-modules')(['@square/web-sdk', 'react-square-web-payments-sdk'])
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig, withTM({
  env: {
    SQUARE_ACCESS_TOKEN: process.env.SQUARE_ACCESS_TOKEN || "",
  },
  reactStrictMode: true,
  experimental: {
    esmExternals: 'loose'
  }
})
