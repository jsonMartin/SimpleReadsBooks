<script lang="ts">
  import { Badge } from "flowbite-svelte";

  export let showText = true;
  export let color:
    | "green"
    | "red"
    | "yellow"
    | "indigo"
    | "purple"
    | "pink"
    | "blue"
    | "dark"
    | "primary" = "green";

  export let divClass = "";
</script>

<div class={divClass}>
  {#if showText}
    <span class="align-middle text-xs font-light">Available in </span>
  {/if}
  <Badge {color}>Hardcover</Badge>
  <Badge {color}>Paperback</Badge>
  <Badge {color}>Kindle</Badge>
</div>
