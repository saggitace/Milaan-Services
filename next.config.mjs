import bundleAnalyzer from "@next/bundle-analyzer";
import withPlugins from "next-compose-plugins";

/** @type {import('next').NextConfig} */
const baseConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
    domains: [
      "res.cloudinary.com",
      "ik.imagekit.io",
      "hebbkx1anhila5yf.public.blob.vercel-storage.com",
    ],
    formats: ["image/avif", "image/webp"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    reactRemoveProperties: process.env.NODE_ENV === "production",
  },
  experimental: {
    optimizeCss: true,
    esmExternals: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
  webpack: (config) => {
    config.optimization.splitChunks = {
      chunks: "all",
      maxInitialRequests: 25,
      maxAsyncRequests: 25,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
          reuseExistingChunk: true,
        },
        motion: {
          test: /[\\/]node_modules[\\/](motion-dom|framer-motion)[\\/]/,
          name: "motion",
          chunks: "all",
          reuseExistingChunk: true,
        },
      },
    };
    return config;
  },
};

// 🔹 Wrap with bundle analyzer
const nextConfig = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(baseConfig);

export default nextConfig;
