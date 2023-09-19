<script>
  import { CldImage } from "@jsonmartin/svelte-cloudinary-astro";
</script>

<section class="w-full font-[Itim]">
  <div
    class="relative flex w-full flex-row items-center justify-between bg-[rgba(0,102,204,0.44)] p-2.5"
  >
    <CldImage
      width={472}
      height="100%"
      aspectRatio={2100 / 1500}
      class="col-span-3 hidden !h-fit !max-w-[20%] animate-[rotateSlow_1s_ease-in_infinite]   sm:flex"
      src="mr-squirrel-sitting"
      alt="Mr. Frog sitting"
    />

    <div class="col-span-6 m-auto flex flex-row justify-center gap-2.5">
      <div class="flex flex-col items-center justify-start gap-0">
        <div class="relative self-stretch text-center text-gray-900">
          <p
            class="text-normal text-shadow-sm mb-5 text-xl md:text-2xl lg:text-3xl"
          >
            Upcoming Books
          </p>
          <div class="mt-30">
            <span class="md:text-xl lg:text-2xl">
              Hunnie Bunny’s Christmas Wish <br />
              Hunnie Bunny's Special Gift<br />
              Hunnie Bunny and the Lost Fairy<br />
              Hunnie Bunny's New Neighbors<br />
              Hunnie Bunny and the Magic Flute<br />
              Hunnie Bunny and the Unicorn<br />
              Hunnie Bunny and the Unicorn<br />
              Hunnie Bunny's Great Escape<br />
              Hunnie Bunny — A New Beginning<br />
            </span>
          </div>
        </div>
      </div>
    </div>

    <CldImage
      width={382}
      height="100%"
      aspectRatio={252 / 191}
      class="col-span-3 hidden !h-fit !max-w-[20%] animate-[bouncefrog_1s_ease-in_infinite] sm:flex"
      src="mr-frog-sitting"
      alt="Mr. Frog sitting"
    />
  </div>
</section>
