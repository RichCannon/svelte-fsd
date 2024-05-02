<script>
	import LangSelect from "$features/i18n/ui/LangSelect.svelte";
	import ThemeSwitcher from "$features/theme/ui/ThemeSwitcher.svelte";
</script>

<header class="header">
	<LangSelect />
	<ThemeSwitcher />
</header>

<style lang="postcss">
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 16px;
	}
</style>
