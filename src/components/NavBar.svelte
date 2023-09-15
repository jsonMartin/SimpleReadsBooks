<script lang="ts">
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
  } from 'flowbite-svelte';
  import { onMount } from 'svelte';
  import { CldImage } from '@jsonmartin/svelte-cloudinary-astro';

  const MAX_PAGE_WIDTH = 1440;

  // Hide allow overflow from the banner to overlap other parts of the page.
  let hideOverflow = true;

  $: headerClass = hideOverflow ? 'w-full relative overflow-hidden relative' : 'w-full relative overflow-visible relative';

  export let randomNum: number;
  const randomNum2 = Math.random() * 1000;

  $: loaded = false;
  let currentPath = '';
  let currentUrlPathname = currentPath;

  onMount(() => {
    console.log('Mounted navbar');

    const OVERFLOW_ANIMATION_TIME = 2000;
    setTimeout(() => {
      hideOverflow = false;
      loaded = true;
    }, OVERFLOW_ANIMATION_TIME);


    // Update Current Path on route change
    currentUrlPathname = window.location.pathname;
    document.addEventListener('astro:after-swap', () => {
      currentUrlPathname = window.location.pathname;
    });
  });

  $: navDivClass = 'mx-auto flex flex-wrap justify-between items-center max-w-screen-xl' + (!loaded ? ' animate-flipInX' : '');
  $: hunnieBunnieClass =
    'absolute bottom-[-9px] right-[-5px] sm:bottom-[-12px] md:bottom-[-22px] md:right-[-10px] lg:bottom-[-22px] lg:right-[-5px] h-16 sm:h-20 md:h-40 lg:h-40 !w-fit' +
    (!loaded ? ' animate-slideUp' : '');
  $: hunnieBunnieReadingClass =
    'absolute hidden sm:block sm:left-[-4%] md:left-[-3%] left-[-4%] bottom-[0px] rotate-3 sm:h-[100px] md:h-[140px] h-[80px] !w-fit' +
    (!loaded ? ' animate-slideInFromLeft' : '');
</script>

<!-- CurrentPath: {currentUrlPathname} | RandomNum: {randomNum} | RandomNum2: {randomNum2} | loaded: {loaded} -->
<div id="header-container">
  <!-- Use visibility:hidden instead of conditionally rendering -->
  <!-- This is to prevent the animation from firing unnecessarily -->
  <header class={headerClass}>
    <Navbar
      let:hidden
      let:toggle
      color="form"
      navClass="w-full md:absolute md:bg-transparent bg-[#FF5A1F] text-white p-3"
      {navDivClass}
      class="max-w-screen-xl"
    >
      <NavBrand href="/">
        <div class="md:hidden flex flex-row justify-center items-center min-w-min">
          <CldImage
            width={128}
            height="100%"
            aspectRatio={128 / 104}
            src="logo"
            class="mr-3 !w-12 sm:!w-16"
            alt="logo"
            loading="eager"
          />

          <span class="self-center whitespace-nowrap sm dark:text-white font-[Itim] text-md sm:text-lg"> Simple Reads Books </span>
        </div>
      </NavBrand>

      <NavHamburger
        on:click={toggle}
        class="hover:bg-primary"
      />

      <NavUl
        {hidden}
        activeUrl={currentUrlPathname}
        nonActiveClass="md:text-white md:font-bold md:hover:transform md:hover:scale-125"
        activeClass="font-extrabold text-white underline bg-green-400 bg-pink-500 md:bg-transparent"
        ulClass="flex flex-col p-3 mt-3 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium bg-transparent"
        divClass="w-full md:block md:w-auto md:bg-black md:bg-opacity-[.15] md:rounded-full md:mr-2 md:mt-2 md:[transform:perspective(250px)_translateZ(0)_rotateX(5deg)]"
        color="green"
      >
        <NavLi href="/home">
          <span>Welcome</span>
        </NavLi>
        <NavLi href="/about">
          <span>About</span>
        </NavLi>

        <NavLi href="/products">
          <span>Books & Products</span>
        </NavLi>

        <NavLi href="/contact">
          <span>Contact</span>
        </NavLi>
      </NavUl>
    </Navbar>

    <CldImage
      src="banner"
      width={MAX_PAGE_WIDTH * 2}
      aspectRatio={338 / 100}
      height="100%"
      alt="Simple Reads Books Banner"
      sizes="100vw"
      class="max-w-screen-2xl m-auto"
      loading="eager"
    />

    <CldImage
      src="hunnie-bunnie-peering-over"
      width={450}
      aspectRatio={7 / 5}
      height="100%"
      alt="Hunnie Bunny Peering Over"
      class={hunnieBunnieClass}
    />

    <CldImage
      src="hunnie-bunnie-reading"
      width={450}
      aspectRatio={7 / 5}
      height="100%"
      alt="Hunnie Bunny Reading"
      class={hunnieBunnieReadingClass}
    />
  </header>
</div>
