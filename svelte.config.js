import adapter from '@sveltejs/adapter-auto'
import sveltePreprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess(),
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
          '@lib': '/src/lib',
          '@styles': '/src/lib/styles',
        }
      }
    }
  }
}

export default config
