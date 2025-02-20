import { withNotpadd } from "@notpadd/core";

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui", "@notpadd/core"],
};

export default withNotpadd(nextConfig);
