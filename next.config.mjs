/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'i.pravatar.cc' },
    ],
  },
  // Allow opening dev site from your phone over LAN
  experimental: {
    allowedDevOrigins: ['http://192.168.1.88:3000'],
  },
};

export default nextConfig;
