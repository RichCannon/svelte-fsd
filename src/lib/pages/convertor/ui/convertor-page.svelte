<script lang="ts">
	import CurrencyInput from "$shared/ui/CurrencyInput/CurrencyInput.svelte";
	import Switch from "$shared/ui/Switch/Switch.svelte";
	import { _ } from "svelte-i18n";
	import { onMount } from "svelte";
	import {
		UAHValue,
		convertedValues,
		buyOrSale,
		convertParams,
	} from "../api/inputStore";
	import { getCurrencyCourse } from "../api/getCurrencyCourse";

	let isLoading = true;

	const onChange = (value: number) => {
		UAHValue.set(value);
	};

	const onSwitchChange = () => {
		buyOrSale.update((prev) => (prev === "buy" ? "sale" : "buy"));
	};

	onMount(async () => {
		const data = await getCurrencyCourse();
		isLoading = false;
		if (!data) return;
		const [EUR, USD] = data;
		convertParams.set({
			EUR: { buy: +EUR.buy, sale: +EUR.sale },
			USD: { buy: +USD.buy, sale: +USD.sale },
		});
	});
</script>

<div class="component-wrapper">
	{#if isLoading}
		<h2 class="component-wrapper__loading">Loading...</h2>
	{:else}
		<Switch on:change={onSwitchChange} checked={$buyOrSale === "sale"}>
			{$_("buy")}
			<svelte:fragment slot="suffix">{$_("sale")}</svelte:fragment>
		</Switch>
		<CurrencyInput
			name="UAH_input"
			locale="en-GB"
			currency="UAH"
			value={$UAHValue}
			onValueChange={onChange}
		/>
		<p class="component-wrapper__currency-output">
			{new Intl.NumberFormat("en-GB", {
				style: "currency",
				currency: "USD",
			}).format($convertedValues.USDValue)}
		</p>
		<p class="component-wrapper__currency-output">
			{new Intl.NumberFormat("en-GB", {
				style: "currency",
				currency: "EUR",
			}).format($convertedValues.EURValue)}
		</p>
	{/if}
</div>

<style lang="postcss">
	.component-wrapper {
		display: grid;
		grid-auto-rows: max-content;
		row-gap: 16px;
		align-self: center;
		justify-self: center;
	}

	.component-wrapper__loading,
	.component-wrapper__currency-output {
		/* specific styles for each element can be added here */
	}
</style>
