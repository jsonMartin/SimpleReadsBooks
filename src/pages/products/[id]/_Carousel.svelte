<script>
  import { Carousel, Thumbnails, Button } from "flowbite-svelte";
  import { CaretRightOutline, CaretLeftOutline } from "flowbite-svelte-icons";
  export let images;
  let index = 0;
</script>

<div class="max-w-4xl space-y-4">
  <Carousel
    {images}
    slideDuration={600}
    let:Indicators
    let:Controls
    bind:index
    imgClass="object-contain h-full !w-full rounded-sm"
    class="align-center flex !h-[300px] w-[100%] justify-center !rounded-none !bg-transparent sm:!h-[400px]"
  >
    <Controls let:changeSlide let:ControlButton>
      <Button
        pill
        class="absolute left-4 top-1/2 -translate-y-1/2 p-2 font-bold opacity-70"
        on:click={changeSlide(false)}
        ><CaretLeftOutline class="pr-[4px]" /></Button
      >
      <Button
        pill
        class="absolute right-4 top-1/2 -translate-y-1/2 p-2 font-bold opacity-70"
        on:click={changeSlide(true)}
        ><CaretRightOutline class="pl-[4px]" /></Button
      >
    </Controls>
  </Carousel>

  <Thumbnails
    class="gap-3 bg-transparent"
    let:Thumbnail
    let:image
    let:selected
    {images}
    bind:index
  >
    <Thumbnail
      {...image}
      {selected}
      class="rounded-md opacity-70 shadow-xl hover:outline hover:outline-primary-500"
      activeClass="outline outline-primary-400 !opacity-100"
    />
  </Thumbnails>
</div>
