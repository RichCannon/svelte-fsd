<script>
	import ThemeSwitcher from "$features/theme/ui/ThemeSwitcher.svelte";
</script>

<header class="header">
	<ThemeSwitcher />
</header>

<style lang="postcss">
	.header {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding: 16px;
	}
</style>
