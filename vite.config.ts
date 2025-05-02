
// Using CommonJS syntax for older Node.js versions
const { defineConfig } = require("vite");
const react = require("@vitejs/plugin-react-swc");
const path = require("path");

// Import the component tagger conditionally to avoid ES module syntax issues
let componentTagger;
try {
  componentTagger = require("lovable-tagger").componentTagger;
} catch (e) {
  // If the module cannot be loaded, provide a placeholder function
  componentTagger = () => null;
}

// https://vitejs.dev/config/
module.exports = defineConfig(({ mode }) => ({
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
