import type { NextConfig } from "next"
import { withContentCollections } from "@content-collections/next"

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/introduction/notpadd",
        permanent: true,
      },
    ]
  },
}

export default withContentCollections(nextConfig)
