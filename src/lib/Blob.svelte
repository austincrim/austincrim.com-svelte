<script>
  import { onDestroy } from 'svelte'

  import { onMount } from 'svelte'

  /** @type {HTMLElement} */
  let blob
  export let speedX = Math.random()
  export let speedY = Math.random()
  export let color
  function moveBlob() {
    let parentBounds = blob.parentElement.getBoundingClientRect()
    let bounds = blob.getBoundingClientRect()
    let leftPx = +blob.style.left.split('px')[0]
    let topPx = +blob.style.top.split('px')[0]
    if (
      bounds.x + bounds.width + 5 > parentBounds.right ||
      bounds.x < parentBounds.left
    ) {
      speedX = -speedX
    }
    if (
      bounds.y + bounds.height + 5 > parentBounds.bottom ||
      bounds.y < parentBounds.top
    ) {
      speedY = -speedY
    }

    let newLeft = leftPx + speedX
    let newTop = topPx + speedY
    blob.style.left = `${newLeft}px`
    blob.style.top = `${newTop}px`
  }

  let interval
  onMount(() => {
    interval = setInterval(() => {
      moveBlob()
    }, 14)
  })
  onDestroy(() => {
    clearInterval(interval)
  })
</script>

<div bind:this={blob} class="dvd w-10 h-10 absolute rounded-full p-2 {color}" />
