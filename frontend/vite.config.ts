/// <reference types="vite/client" />

import "dotenv/config";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

console.log(process.env.VITE_SERVER_HOST);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      "@": "/src"
    }
  }
});
