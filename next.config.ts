import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //images: {
  //  localPatterns: [
  //    {
  //      pathname: "/assets/images/**",
  //      search: "",
  //    },
  //  ],
  //},
  sassOptions: {
    additionalData: `@use "src/assets/variables.scss" as *;`,
  },
};

export default nextConfig;
