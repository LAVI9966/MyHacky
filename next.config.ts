import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['ik.imagekit.io', 'example.com'], // <-- add your actual image domain here
  },
};

export default nextConfig;
