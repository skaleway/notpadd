import { withNotpadd } from "notpadd"
import type { NextConfig } from "next"
// @ts-expect-error - Prisma plugin is not typed
import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin"

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()]
    }
    return config
  },
  images: {
    remotePatterns: [
      {
        hostname: "rxxsrjqal9.ufs.sh",
        protocol: "https",
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
}

const config = async (): Promise<NextConfig> => {
  // @ts-expect-error - Notpadd is not typed
  return (await withNotpadd(nextConfig)) as NextConfig
}

export default config
