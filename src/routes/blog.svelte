<script>
  import PostPreview from '$lib/PostPreview.svelte'

  export let posts = []
  export const prerender = true
</script>

<svelte:head>
  <title>Austin Crim | blogging for the web</title>
  <meta
    name="description"
    content="The personal blog of Austin Crim, a web builder"
  />
  <meta
    name="og:title"
    content="The personal blog of Austin Crim, a web builder"
  />
  <meta name="og:image" content="https://austincrim.com/og/blog.png" />
  <meta name="og:url" content="https://austincrim.com" />
</svelte:head>

<div
  class="flex flex-col max-w-5xl mx-auto my-20 space-y-12 dark:text-gray-50 md:rounded-lg"
>
  <h3 class="text-4xl">Posts</h3>
  {#each posts as post (post.slug)}
    <PostPreview {post} />
  {/each}
</div>
