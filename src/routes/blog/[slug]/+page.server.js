import { getPostProperties } from '$lib/notion'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  let post = await getPostProperties(params.slug)

  return { post }
}
