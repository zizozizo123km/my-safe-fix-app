import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: process.cwd(),
  base: '/',
  publicDir: 'public',
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~components': path.resolve(__dirname, './src/components'),
      '~assets': path.resolve(__dirname, './src/assets'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'], 
  },

  server: {
    port: 3000,
    open: true,
    strictPort: true,
    hmr: {
        overlay: true,
    }
  },

  build: {
    outDir: 'dist',
    sourcemap: false,
    emptyOutDir: true,
    target: 'es2020', 

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Optimized vendor chunking for large dependencies
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
          if (id.includes('src/pages')) {
             // Separate page chunks for lazy loading routes
             return 'pages';
          }
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/css/style.[hash].css';
          }
          return 'assets/[ext]/[name].[hash].[ext]';
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name].[hash].js',
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})