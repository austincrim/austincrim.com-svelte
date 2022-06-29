<script>
  import { RightArrow } from './Icons'

  export let post
</script>

<a sveltekit:prefetch class="group" href={`/blog/${post.slug}`}>
  <article
    class="relative flex items-center transition-transform mouse:group-hover:-translate-x-2 group-focus-visible:-translate-x-2"
  >
    <div
      class="flex flex-col flex-grow p-8 space-y-1 text-base border border-gray-200 rounded shadow-md bg-off-base"
    >
      <div
        class="flex flex-col justify-between space-y-2 md:space-y-0 md:space-x-2 md:flex-row md:items-baseline"
      >
        <h3 class="text-xl font-bold tracking-wider underline sm:no-underline">
          {post.title}
        </h3>
        <div class="flex flex-col md:items-end md:pl-2">
          <span class="text-muted">
            {new Date(post.datePublished).toLocaleDateString()}
          </span>
        </div>
      </div>
      <p class="max-w-3xl leading-8">{post.lede}</p>
    </div>
    <span
      class="absolute transition opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100 -right-8"
    >
      {@html RightArrow({ height: 32, width: 32 })}
    </span>
  </article>
</a>
