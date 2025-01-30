import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/frontend-mentor-rest-countries-api-with-color-theme-switcher",
  plugins: [react()],
});
