<script>
  import Blob from './Blob.svelte'
  import { RightArrow } from './Icons.js'
</script>

<div
  class="flex flex-col justify-between my-20 hero space-y-10 sm:items-end sm:flex-row"
>
  <div class="flex flex-col sm:w-2/3">
    <h1 class="text-5xl">
      <span>Hi, I'm&nbsp;</span>
      <span
        class="block tracking-wide text-transparent sm:inline theme-gradient bg-clip-text whitespace-nowrap"
      >
        Austin Crim
      </span>
    </h1>
    <h2 class="max-w-lg mt-4 text-3xl font-light">
      I build things for the web.
    </h2>
  </div>
  <div class="flex flex-col items-start justify-center space-y-4 sm:items-end">
    <a
      class="text-lg font-semibold transition-colors text-primary hover:text-secondary group"
      href="mailto:aust.crim@gmail.com"
    >
      <span class="mr-1">Say Hi</span>
      <span
        class="inline-block align-middle transition-transform transform group-hover:translate-x-1"
      >
        {@html RightArrow()}
      </span>
    </a>
  </div>
</div>
<div class="border-2 border-gray-600 rounded about relative overflow-hidden">
  <Blob color="bg-blue-200" />
  <Blob color="bg-fuchsia-200" />
  <Blob color="bg-indigo-200" />
  <p class="text-xl leading-loose max-w-[80ch] relative p-6 backdrop-blur-xl">
    I started out as a 19-year old COBOL programmer and now I work at <a
      class="link"
      href="https://prisma.io">Prisma</a
    >. Chat with me about Svelte,
    <a class="link" href="https://perusingtheplatform.com">web APIs</a>, or
    guitars.
  </p>
</div>
