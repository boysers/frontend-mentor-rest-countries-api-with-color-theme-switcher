import { fetchJson } from "./helpers";
import { BorderCountry, Country } from "./types";

const DATA_URL = "/data.json";
// const ALL_API_URL = "https://restcountries.com/v3.1/all?fields=cca3,name,flags,population,region,capital"
// const ALPHA_API_URL = "https://restcountries.com/v3.1/alpha";

export async function fetchCountriesData(): Promise<Country[]> {
  return fetchJson<Country[]>(DATA_URL);
}

export async function fetchCountryData(
  code: string
): Promise<Country | undefined> {
  const countries = await fetchJson<Country[]>(DATA_URL);
  return countries.find(
    (country) => country.cca3.toLowerCase() === code.toLowerCase()
  );
}

export async function fetchBorderCountries(
  countries: string[]
): Promise<BorderCountry[]> {
  return fetchJson<Country[]>(DATA_URL).then((data) =>
    data
      .filter((item) => countries.includes(item.cca3))
      .map(({ name, cca3, flags }) => ({ name, cca3, flags }))
  );
}
