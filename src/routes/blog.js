import { getAllPostProperties } from '$lib/notion'

export async function get() {
  let posts = await getAllPostProperties()
  return { body: { posts } }
}
