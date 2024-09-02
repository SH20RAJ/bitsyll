import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development", // Disable PWA for development
});

const nextConfig = {
  output: "export",
};

export default withPWA(nextConfig);
