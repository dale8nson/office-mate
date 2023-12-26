/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/drive-storage/**',
      },
      {
        protocol: 'https',
        hostname: 'drive-thirdparty.googleusercontent.com',
        port: '',
        pathname: '/16/type/**'
      }
    ],
  },
  httpAgentOptions: {
    keepAlive: true,
  },
}

module.exports = nextConfig
