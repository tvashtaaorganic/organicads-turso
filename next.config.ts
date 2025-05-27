/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: 'export',
  typescript: {
    ignoreBuildErrors: true, // Allow build despite TS errors
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/s2ucdn/image/upload/**", // Cloudinary account from previous pages
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/djiki7tvo/image/upload/**", // Cloudinary account for seooutsource/page.tsx
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/pw/**", // Google images (covers the error URL)
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**", // Broader pattern for any lh3.googleusercontent.com images
      },
    ],
  },
};

module.exports = nextConfig;
