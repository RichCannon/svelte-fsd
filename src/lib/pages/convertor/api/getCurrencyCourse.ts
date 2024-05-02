export type CurrencyCoursType = {
  "ccy":string
  "base_ccy":string
  "buy":string
  "sale":string
}


export const getCurrencyCourse = async () => {
  try {
    const response = await fetch(
      "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5",
      {
        method: "GET",
        mode: "no-cors",
      },
    );
    if (response.ok) {
      const data = await response.json();
      return data as CurrencyCoursType[];
    }
  } catch (e) {}
}