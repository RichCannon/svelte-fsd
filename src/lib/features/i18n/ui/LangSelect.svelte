<script lang="ts">
  import { locale, locales, _ } from "svelte-i18n";
  import { DEFAULT_LANG } from "../api/i18n";

  $: if (!$locale || !$locales.includes($locale)) {
    $locale = DEFAULT_LANG;
  }
</script>

<select bind:value={$locale}>
  {#each $locales as locale}
    <option value={locale}>{$_(locale)}</option>
  {/each}
</select>
