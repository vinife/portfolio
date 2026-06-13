import type { NextConfig } from "next";
import { withOutstatic } from "outstatic/next-plugin";

const nextConfig: NextConfig = {
  transpilePackages: ["next-mdx-remote", "rehype-unwrap-images"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default withOutstatic(nextConfig);
