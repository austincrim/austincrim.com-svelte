import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    prerender: {
      default: true,
      concurrency: 10
    },
    trailingSlash: 'always'
  },

  preprocess: [
    preprocess({
      postcss: true
    })
  ]
}

export default config
