<script>
  import Footer from '$lib/Footer.svelte'
  import Hero from '$lib/Hero.svelte'
  import { RightArrow } from '$lib/Icons.js'
  import PostPreview from '$lib/PostPreview.svelte'
  import Section from '$lib/Section.svelte'

  export let posts
</script>

<svelte:head>
  <title>Austin Crim | building for the web</title>
  <meta
    name="description"
    content="The personal website of Austin Crim, a web builder"
  />
  <meta
    name="og:title"
    content="The personal website of Austin Crim, a web builder"
  />
  <meta name="og:image" content="https://austincrim/og/index.png" />
  <meta name="og:url" content="https://austincrim.com" />
</svelte:head>
<main>
  <Hero />
  <Section title="What I'm Writing">
    <div class="flex flex-col gap-10 py-8">
      <ul class="flex flex-col gap-20 ">
        {#each posts as post (post.slug)}
          <li>
            <PostPreview {post} />
          </li>
        {/each}
      </ul>
      <a
        class="self-end text-lg font-semibold transition-colors text-primary hover:text-secondary group"
        href="/blog"
        sveltekit:prefetch
      >
        <span class="mr-1">Read more</span>
        <span
          class="inline-block align-middle transition-transform transform group-hover:translate-x-1"
        >
          {@html RightArrow()}
        </span>
      </a>
    </div>
  </Section>
</main>

<Footer>
  <div class="flex flex-col items-center gap-4">
    <a class="font-medium underline" href="mailto:aust.crim@gmail.com">
      Say Hi
    </a>
    <span>Designed and developed by Austin Crim</span>
  </div>
</Footer>
