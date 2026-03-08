/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"], // Auto-convert to WebP
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
  },
  compress: true,
};

export default nextConfig;
