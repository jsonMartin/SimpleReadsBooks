<script>
  import { Carousel, Thumbnails, Button } from 'flowbite-svelte';
  import { CaretRightOutline, CaretLeftOutline } from 'flowbite-svelte-icons';
  export let images;
  let index = 0;
</script>

<div class="max-w-4xl space-y-4">
  <Carousel
    {images}
    let:Indicators
    let:Controls
    bind:index
    classSlide="flex items-center justify-center h-[100%] w-[100%] !rounded-none !bg-transparent"
    class="w-[100%] !h-[300px] sm:!h-[400px] !rounded-none !bg-transparent"
  >
    <Controls
      let:changeSlide
      let:ControlButton
    >
      <Button
        pill
        class="p-2 absolute top-1/2 -translate-y-1/2 left-4 font-bold opacity-70"
        on:click={changeSlide(false)}><CaretLeftOutline class="pr-[4px]" /></Button
      >
      <Button
        pill
        class="p-2 absolute top-1/2 -translate-y-1/2 right-4 font-bold opacity-70"
        on:click={changeSlide(true)}><CaretRightOutline class="pl-[4px]" /></Button
      >
    </Controls>
  </Carousel>

  <Thumbnails
    class="bg-transparent gap-3"
    let:Thumbnail
    let:image
    let:selected
    {images}
    bind:index
  >
    <Thumbnail
      {...image}
      {selected}
      class="rounded-md shadow-xl hover:outline hover:outline-primary-500"
    />
  </Thumbnails>
</div>

<style>
  /* ToDo: Fix with pull request to add object fit & tailwind class parameters to Carousel as prop */
  :global(#carousel-wrapper img) {
    object-fit: contain !important;
    height: 100% !important;
    width: fit-content !important;
    border-radius: 0.25rem !important;
  }

  :global(#carousel-wrapper button > img) {
    object-fit: cover !important;
  }
</style>
