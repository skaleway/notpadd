import { withNotpadd } from "@notpadd/core";

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
};

export default withNotpadd(nextConfig);
