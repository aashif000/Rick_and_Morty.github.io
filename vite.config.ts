import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Set base URL based on environment mode (production or development)
  base: "https://aashif000.github.io/rick_and_morty.github.io/",  // Default base for local development
  
  server: {
    host: "::", // Accept connections from any IP address (useful for local network access)
    port: 8080, // Your local server port
  },
  
  plugins: [
    react(),
    mode === "development" && componentTagger(), // Only add componentTagger in development
  ].filter(Boolean),
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
