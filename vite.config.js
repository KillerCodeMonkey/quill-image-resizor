import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      formats: ['es', 'umd'],
      entry: resolve(__dirname, 'src/ImageResizor.ts'),
      name: 'quill-image-resizor',
      // the proper extensions will be added
      fileName: 'ImageResizor'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {}
      }
    }
  },
  plugins: [dts()]
})
