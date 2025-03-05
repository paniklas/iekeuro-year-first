import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'picsum.photos',
            port: "",
            // pathname: "/f/**",
        }
    ],
},
};

export default nextConfig;
