import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import viteConfig from './vite.config'


// https://vitejs.dev/config/
export default mergeConfig(viteConfig, defineConfig({
  test: {
    globals: true,
  }
}))
