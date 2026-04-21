import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Settings for 'npm run dev'
  server: {
    port: 3000,
    allowedHosts: true,
  },
  // Settings for 'npm run preview' (This is what Pxxl uses)
  preview: {
    port: 3000,
    host: true,         // Allows external connections
    allowedHosts: true, // Prevents the "Blocked host" error
  },
});
