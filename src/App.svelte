<script lang="ts" context="module">
  import { waitLocale } from "svelte-i18n";
  import "$features/i18n/api/i18n";

  export async function preload() {
    return waitLocale();
  }
</script>

<script lang="ts">
  import ConvertorPage from "$pages/convertor/ui/convertor-page.svelte";
  import Header from "$widgets/header/ui/Header.svelte";
</script>

<main class="app">
  {#await preload() then}
    <Header />
    <ConvertorPage />
  {/await}
</main>

<style lang="postcss">
  @import "./lib/shared/styles/theme.css";
  @import "./lib/shared/styles/fonts.css";
  @import "./lib/shared/styles/global.css";

  .app {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
    font-family: "Roboto", sans-serif;
  }
</style>
