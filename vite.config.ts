
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Import the component tagger conditionally to avoid ES module syntax issues
let componentTagger;
try {
  // @ts-ignore - Dynamic import for compatibility
  const lovableTagger = await import("lovable-tagger").catch(() => ({ componentTagger: null }));
  componentTagger = lovableTagger.componentTagger;
} catch (e) {
  // If the module cannot be loaded, provide a placeholder function
  componentTagger = () => null;
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }: { mode: string }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Handle SPA routing for deployed builds
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Copy the static files to the build directory
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
}));
