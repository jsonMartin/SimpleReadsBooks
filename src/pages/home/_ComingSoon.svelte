<script>
  import { CldImage } from '@jsonmartin/svelte-cloudinary-astro';
</script>

<section class="w-full font-[Itim]">
  <div class="bg-[rgba(0,102,204,0.44)] p-2.5 flex flex-row items-center justify-between w-full relative">
    <CldImage
      width={472}
      height="100%"
      aspectRatio={2100 / 1500}
      class="hidden sm:flex col-span-3 !max-w-[20%] !h-fit   animate-[rotateSlow_1s_ease-in_infinite]"
      src="mr-squirrel-sitting"
      alt="Mr. Frog sitting"
    />

    <div class="flex flex-row gap-2.5 justify-center col-span-6 m-auto">
      <div class="flex flex-col gap-0 items-center justify-start">
        <div class="text-gray-900 text-center relative self-stretch">
            <p class="text-xl md:text-2xl lg:text-3xl text-normal text-shadow-sm mb-5">Upcoming Books</p>
            <div class="mt-30">
              <span class="md:text-xl lg:text-2xl"
                >Hunnie Bunny’s Garden Mystery
                <br />
                Hunnie Bunny’s Christmas Wish
                <br />
                Hunnie Bunny's Special Gift<br />
                Hunnie Bunny's New Neighbors<br />
                Hunnie Bunny and the Lost Fairy<br />
                Hunnie Bunny and the Magic Flute<br />
                Hunnie Bunny and the Unicorn<br />
              </span>
            </div>
        </div>
      </div>
    </div>

    <CldImage
      width={382}
      height="100%"
      aspectRatio={252 / 191}
      class="hidden sm:flex col-span-3 !max-w-[20%] !h-fit animate-[bouncefrog_1s_ease-in_infinite]"
      src="mr-frog-sitting"
      alt="Mr. Frog sitting"
    />
  </div>
</section>
