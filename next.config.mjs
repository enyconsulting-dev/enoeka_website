/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Install @typescript-eslint/eslint-plugin to re-enable during CI
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "enyconsulting-landingpage.vercel.app",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
