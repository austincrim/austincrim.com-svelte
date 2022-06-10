import { getPostProperties } from '$lib/notion'

/** @type {import('./__types/[slug]').RequestHandler} */
export async function get({ params }) {
  let post = await getPostProperties(params.slug)
  return {
    body: { post },
    headers: {
      'Cache-Control': 'max-age=300'
    }
  }
}
