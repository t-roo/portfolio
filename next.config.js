/** @type {import('next').NextConfig} */
const branchName = "";
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: branchName,
  basePath: branchName,
}

module.exports = nextConfig
