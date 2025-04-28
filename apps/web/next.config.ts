import { withNotpadd } from "notpadd";
import type { NextConfig } from "next";
// @ts-ignore
import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        hostname: "rxxsrjqal9.ufs.sh",
        protocol: "https",
      },
    ],
  },
};

const config = async (): Promise<NextConfig> => {
  // @ts-ignore
  return (await withNotpadd(nextConfig)) as NextConfig;
};

export default config;
