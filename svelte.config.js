import adapter from '@sveltejs/adapter-auto'
import { resolve } from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ['PATCH', 'DELETE']
    },
    vite: {
      resolve: {
        alias: {
          '@components': '/src/lib/components',
          '@lib': '/src/lib'
        }
      }
    }
  }
}

export default config
