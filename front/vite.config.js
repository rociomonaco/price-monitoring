import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ViteAliases } from 'vite-aliases'
import dotenv from 'dotenv'
import WindiCSS from 'vite-plugin-windicss'

dotenv.config()

export default defineConfig(() => {
  return {
    plugins: [WindiCSS(), react(), ViteAliases()],
    resolve: {
      extensions: ['.js', '.jsx']
    },
    server: {
      port: 3000
    }
  }
})
