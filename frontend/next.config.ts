/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['seichi-diary-imgs.s3.ap-northeast-1.amazonaws.com'],
  },
};

export default nextConfig;
