/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'i.pravatar.cc' },
    ],
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true, // ⭐ shumë e rëndësishme për Hostinger
};

export default nextConfig;