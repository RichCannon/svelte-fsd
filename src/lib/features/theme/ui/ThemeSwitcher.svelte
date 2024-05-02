<script lang="ts">
	import Switch from "$shared/ui/Switch/Switch.svelte";
	import { checkIsDarkSchemePreferred, setTheme } from "../api/helpers";

	let currentTheme: string | null = localStorage.getItem("theme");

	$: isDark = currentTheme === "dark";

	$: {
		if (!currentTheme) {
			const preferedTheme = checkIsDarkSchemePreferred() ? "dark" : "light";
			currentTheme = preferedTheme;
		}

		setTheme(currentTheme);
	}

	const onSwitchChange = () => {
		currentTheme = isDark ? "light" : "dark";
		localStorage.setItem("theme", currentTheme);
		document.documentElement.setAttribute("data-theme", currentTheme);
	};
</script>

<Switch checked={isDark} on:change={onSwitchChange}>
	{isDark ? "DARK" : "LIGHT"}
</Switch>
