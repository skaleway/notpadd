import { withNotpadd } from "@notpadd/core";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const config = async (): Promise<NextConfig> => {
  // @ts-ignore
  return (await withNotpadd(nextConfig)) as NextConfig;
};

export default config;
