import { defineConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [],
  test:{
    globals:true,
    environment:"jsdom"
  }
})
