import { defineConfig } from 'vite'
import path from 'path'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      $features: path.resolve(__dirname,'src/lib/features'),
      $pages: path.resolve(__dirname,'src/lib/pages'),
      $shared: path.resolve(__dirname,'src/lib/shared'),
      $widgets: path.resolve(__dirname,'src/lib/widgets'),
    }
  },
})
