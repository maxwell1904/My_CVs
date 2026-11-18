import type { NextConfig } from "next";

const config: NextConfig = {
  // Keep this lab independent of lockfiles in parent workspaces.
  turbopack: { root: process.cwd() },
  outputFileTracingRoot: process.cwd(),
};

export default config;
