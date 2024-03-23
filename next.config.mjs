/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "https://refactored-computing-machine-6jqrj4gw6q6h674-3000.app.github.dev/",
        "localhost:3000",
      ],
    },
  },
};

export default nextConfig;
