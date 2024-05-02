import { derived, writable } from "svelte/store";


export const UAHValue = writable(0);

export const convertParams = writable({
  EUR: {
    buy: 39,
    sale: 40,
  },
  USD: {
    buy: 35,
    sale: 36,
  }
})

export const buyOrSale = writable<'buy' | 'sale'>('buy')

export const convertedValues = derived([UAHValue, convertParams, buyOrSale], ([$UAHValue, $convertParams, $buyOrSale]) => {
  const USDValue = $UAHValue / $convertParams.USD[$buyOrSale];
  const EURValue = $UAHValue / $convertParams.EUR[$buyOrSale];;
  return {
    USDValue,
    EURValue
  }
})