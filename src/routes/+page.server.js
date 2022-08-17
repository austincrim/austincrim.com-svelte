import { getAllPostProperties } from '$lib/notion'

export async function load() {
  let posts = await getAllPostProperties()
  return { posts: posts.slice(0, 5) }
}
