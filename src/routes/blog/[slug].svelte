<script>
  import '../../styles/post.css'
  export let post
  export const prerender = true
</script>

<svelte:head>
  <title>{post.title} | Austin Crim</title>
  <meta name="description" content={post.content} />
  <meta name="og:title" content={post.title} />
  <meta name="og:image" content="https://austincrim.com/og/{post.slug}.png" />
  <meta name="og:url" content="https://austincrim.com/{post.slug}" />
</svelte:head>

<article class={`flex flex-col justify-around pb-16 space-y-10 text-base`}>
  <div class="flex flex-col space-y-4 heading">
    <h1 class="inline pt-10 text-4xl text-primary ">
      {post.title}
    </h1>
    <span class="text-lg">{post.lede}</span>
    <span class="text-muted">
      {new Date(post.datePublished).toLocaleDateString('en-US')}
    </span>
  </div>
  <div class="max-w-4xl">
    <div
      class="mt-8 leading-loose prose prose-pre:text-gray-800 prose-pre:bg-gray-50 max-w-none article text-xl"
    >
      {@html post.html}
    </div>
  </div>
</article>
