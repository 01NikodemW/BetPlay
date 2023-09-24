/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "media-1.api-sports.io",
      "media-2.api-sports.io",
      "media-4.api-sports.io",
      "vectorseek.com",
      "logodownload.org",
      "blog.logomyway.com",
    ],
  },
};

module.exports = nextConfig;
