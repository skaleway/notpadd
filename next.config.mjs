/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
          allowedOrigins: ["https://stunning-space-couscous-xj79jvw4559f6jr-3000.app.github.dev/", "localhost:3000"]
        }
      }
};

export default nextConfig;
