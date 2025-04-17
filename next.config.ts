import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    localPatterns: [
      {
        pathname: "/assets/images/**",
        search: "",
      },
    ],
  },
  sassOptions: {
    additionalData: `@import "src/assets/variables.scss";`,
  },
};

export default nextConfig;
