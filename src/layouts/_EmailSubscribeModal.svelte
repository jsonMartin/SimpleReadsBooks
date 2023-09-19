<script lang="ts">
  import { Modal } from "flowbite-svelte";

  import { isEmailModalOpen } from "../data/layoutStore.js";
</script>

<Modal bind:open={$isEmailModalOpen} class="h-fit w-fit pt-10" autoclose>
  <iframe
    title="email subscribe"
    width="540"
    height="540"
    src="https://cb8831b5.sibforms.com/serve/MUIFAAlGMe78lSVFkIYUCGSb2MNQDS5_DdlDLsckCsxmqSUdh2yo0ZkJsUu0II_U0BSAwsPnzkxTmUW5kLyZmIr2EWtSk4V1sDYqKe4yV6xBlyPnFMqIPrjlvJqZBx_7Smqhxr1q_30uur1_-joez43hUw1ucLcu_zp7FnrJn1zJZ8B3qgCIMxPaxlhAKZvLSeaEh3O0Qlumw18x"
    allowfullscreen
    style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"
    class="-mx-10"
  />
</Modal>
