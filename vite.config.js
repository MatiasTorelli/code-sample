import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import autoprefixer from 'autoprefixer'
import postcssMixins from 'postcss-mixins'
import postcssExtendRule from 'postcss-extend-rule'
import postcssSimpleVars from 'postcss-simple-vars'
import postcssNested from 'postcss-nested'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'css': fileURLToPath(new URL('./src/assets/css', import.meta.url))
    }
  },

  css: {
    postcss: {
      plugins: [
        autoprefixer,
        postcssMixins,
        postcssExtendRule,
        postcssSimpleVars,
        postcssNested
      ]
    }
  }
})
