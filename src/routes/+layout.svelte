<script>
  import Nav from '$lib/Nav.svelte'
  import '../styles/tailwind.css'
</script>

<div class="text-base bg-base">
  <Nav />
  <div class="px-10 mx-auto lg:max-w-5xl md:max-w-3xl">
    <slot />
  </div>
</div>
