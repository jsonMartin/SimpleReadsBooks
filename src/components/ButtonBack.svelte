<script>
  import { Button, Heading } from "flowbite-svelte";

  const pClass = "text-sm text-gray-500 font-normal leading-normal pb-2";
</script>

<Button
  class="mt-[24px] bg-primary-500 text-white"
  size="lg"
  on:click={() => (window.location.href = "/")}
>
  <svg
    class="mr-2 h-4 w-4"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 10"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M13 5H1m0 0 4 4M1 5l4-4"
    />
  </svg>
  Go back
</Button>
