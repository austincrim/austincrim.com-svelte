<script>
  import '../../../styles/post.css'

  /** @type {import ('./$types').PageData}*/
  export let data
  export const prerender = true
</script>

<svelte:head>
  <title>{data.post.title} | Austin Crim</title>
  <meta name="description" content={data.post.content} />
  <meta name="og:title" content={data.post.title} />
  <meta
    name="og:image"
    content="https://austincrim.com/og/{data.post.slug}.png"
  />
  <meta name="og:url" content="https://austincrim.com/{data.post.slug}" />
</svelte:head>

<article class={`flex flex-col justify-around pb-16 space-y-10 text-base`}>
  <div class="flex flex-col space-y-4 heading">
    <h1 class="inline pt-10 text-4xl text-primary ">
      {data.post.title}
    </h1>
    <span class="text-lg">{data.post.lede}</span>
    <span class="text-muted">
      {new Date(data.post.datePublished).toLocaleDateString('en-US')}
    </span>
  </div>
  <div class="max-w-4xl">
    <div
      class="mt-8 leading-loose prose prose-pre:text-gray-800 prose-pre:bg-gray-50 max-w-none article text-lg"
    >
      {@html data.post.html}
    </div>
  </div>
</article>
