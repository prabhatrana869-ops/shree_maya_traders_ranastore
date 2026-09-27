import { defineConfig } from 'vite'

export default defineConfig({
  publicDir: 'public',
  server: {
    watch: {
      ignored: ['**/public/images/**']
    }
  }
})
