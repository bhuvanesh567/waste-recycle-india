import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "Waste-Management-System-";

const nextConfig: NextConfig = {
  // Static HTML export — required for GitHub Pages
  output: "export",

  // Prefix all asset paths with the repo name on production
  // Locally (npm run dev) basePath is empty so routing works normally
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",

  // Required for static export — trailing slashes ensure index.html is generated
  trailingSlash: true,

  images: {
    // next/image optimisation requires a server — disable for static export
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "randomuser.me" },
    ],
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;