<script lang="ts">
  import { Button } from "flowbite-svelte";

  export let fullWidth = false;
  export let disabled = false;
  export let size: "xl" | "xs" | "sm" | "lg" | "md" = "xl";
  export let stopPropagation = false; // Allows clicks to stop bubbling up to trigger event handling in parent
  export let href = "";
  export let color = "";
  export let buttonClass = `${fullWidth && "w-full"} no-underline ${
    !color ? "bg-[#3E5962] text-white" : ""
  }`;
</script>

<Button
  href={!disabled ? href : ""}
  target="_blank"
  {size}
  class={buttonClass}
  {disabled}
  {color}
  on:click={(event) => {
    stopPropagation && event.stopPropagation();
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
    id="Layer_1"
    x="0px"
    y="0px"
    viewBox="0 0 64 64"
    width="24"
    height="24"
    class="mr-3 shadow-xl"
    style="enable-background:new 0 0 64 64;"
    xml:space="preserve"
  >
    <style type="text/css">
      .st0 {
        fill: #35614a;
      }
      .st1 {
        fill: #ffffff;
      }
    </style>
    <path
      class="st0"
      d="M58.8,64H5.2C2.3,64,0,61.7,0,58.8V5.2C0,2.3,2.3,0,5.2,0h53.5C61.7,0,64,2.3,64,5.2v53.5  C64,61.7,61.7,64,58.8,64z"
    />
    <g>
      <path
        class="st1"
        d="M42.2,30.1c0.3,5.7,0.4,7.3,0.4,12.2v10.7h-7.1V11h7.1c0,0,3.4,12.3,4.1,15c0.8,2.6,1.3,4.9,1.7,6.6   c-0.2-4.1-0.3-9.2-0.3-13.4v-8.3H55v42h-6.4c0,0-3.9-13-4.7-15.5C43.3,35.5,42.8,33.2,42.2,30.1L42.2,30.1z"
      />
      <path
        class="st1"
        d="M22.9,30.6c3.4-0.2,5.4-2.9,5.4-8.1c0-7.2-2-11.6-9.5-11.6H9v42.1h9.8c6.7,0,10.7-3.2,10.7-11.9   C29.5,34.3,26.7,30.6,22.9,30.6z M16.5,15.8h1.4c2.5,0,3,1.8,3,6.7c0,3.6-0.4,5.4-2.5,5.4h-1.9V15.8z M18.5,48.1h-1.9V33.2h1.8   c2.4,0,3,2.3,3,7C21.4,46.7,20.8,48.1,18.5,48.1z"
      />
    </g>
  </svg>

  Buy at Barnes & Noble
</Button>
