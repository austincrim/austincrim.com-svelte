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
  <!-- <Section title="Places I Have Appeared" id="appearances">
            <ul class="flex flex-col gap-20 py-8">
              {appearances.map((appearance) => (
                <li key={appearance.title}>
                  <Appearance appearance={appearance} />
                </li>
              ))}
            </ul>
          </Section> -->
  <Section title="What I'm Up To">
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
  <!-- <Section title="Things I Have Built" id="portfolio">
            <ul class="flex flex-col gap-10">
              {projects.map((project) => (
                <li key={project.title}>
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          </Section> -->
</main>

<Footer>
  <div class="flex flex-col items-center gap-4">
    <a class="font-medium underline" href="mailto:aust.crim@gmail.com">
      Say Hi
    </a>
    <span>Designed and developed by Austin Crim</span>
  </div>
</Footer>
