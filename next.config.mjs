/** @type {import('next').NextConfig} */
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const basePath = configuredBasePath
  ? `/${configuredBasePath.replace(/^\/+|\/+$/g, "")}`
  : "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
