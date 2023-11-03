<script>
  import { Carousel } from "flowbite";
  import { onMount } from "svelte";
  import { testimonials } from "../../data/testimonialsStore";

  let carousel; // Carousel instance
  const SLIDE_INTERVAL = 5000; // ms

  onMount(() => {
    const items = Array.from(
      document.querySelectorAll("[data-carousel-item]"),
    ).map((el, idx) => ({ position: idx, el }));

    carousel = new Carousel(
      document.getElementById("testimonial-carousel"),
      items,
      {
        defaultPosition: 0,
        interval: SLIDE_INTERVAL,
      },
    );

    carousel.cycle();
  });
</script>

<section class="bg-white font-[Itim] dark:bg-gray-900">
  <div class="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
    <div class="mx-auto max-w-screen-sm">
      <svg
        class="mx-auto mb-0 h-12 text-gray-400 dark:text-gray-600"
        viewBox="0 0 24 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
          fill="currentColor"
        />
      </svg>
    </div>
    <div id="testimonial-carousel" class="relative" data-carousel="slide">
      <div
        class="relative mx-auto h-[320px] max-w-screen-md overflow-x-hidden overflow-y-visible rounded-lg max-[480px]:h-[420px] max-[320px]:h-[512px] sm:h-96 lg:h-72"
      >
        {#each testimonials as testimonial}
          <figure
            class="carouselItem m-auto hidden h-fit w-full max-w-screen-md"
            data-carousel-item
          >
            <blockquote>
              <p
                class="text-lg font-medium text-gray-900 dark:text-white sm:text-2xl"
              >
                {@html testimonial.text}
              </p>
            </blockquote>
            <figcaption class="mt-6 flex items-center justify-center space-x-3">
              <img class="h-6 w-6" src={testimonial.image} alt="Testimonial" />
              <div
                class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700"
              >
                <div class="pr-3 font-medium text-gray-400 dark:text-white">
                  {testimonial.author}
                </div>
              </div>
            </figcaption>
          </figure>
        {/each}
      </div>
      <div class="flex items-center justify-center">
        <button
          type="button"
          class="group mr-4 flex h-full cursor-pointer items-center justify-center focus:outline-none"
          on:click={() => carousel.prev()}
          data-carousel-prev
        >
          <span
            class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                fill-rule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              ></path></svg
            >
            <span class="hidden">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="group flex h-full cursor-pointer items-center justify-center focus:outline-none"
          on:click={() => carousel.next()}
          data-carousel-next
        >
          <span
            class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path></svg
            >
            <span class="hidden">Next</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</section>
