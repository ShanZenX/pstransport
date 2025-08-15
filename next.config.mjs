/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com", // allow images from Unsplash
      "www.freepik.com"      // allow images from Freepik
    ],
  },
};

export default nextConfig;
