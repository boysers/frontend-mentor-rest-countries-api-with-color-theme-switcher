import { fetchData } from "./helps";
import { BorderCountries, Countries, Country } from "./types";

const API_BASE_URL = "https://restcountries.com/v3.1";
const API_ENDPOINTS = {
  allCountries: `${API_BASE_URL}/all?fields=cca3,name,flags,population,region,capital`,
  countryDetails: (code: string) =>
    `${API_BASE_URL}/alpha/${code.toLowerCase()}?fields=cca3,name,flags,population,region,capital,languages,subregion,capital,borders,currencies,tld`,
  borderCountries: (codes: string[]) =>
    `${API_BASE_URL}/alpha?fields=cca3,name&codes=${codes.map((code) => code.toLowerCase()).join(",")}`,
};

export async function fetchCountriesData(): Promise<Countries[]> {
  return fetchData<Countries[]>(API_ENDPOINTS.allCountries);
}

export async function fetchCountryData(code: string): Promise<Country> {
  return fetchData<Country>(API_ENDPOINTS.countryDetails(code));
}

export async function fetchBorderCountries(
  countries: string[]
): Promise<BorderCountries[]> {
  if (countries.length === 0) {
    return Promise.resolve([]);
  }
  return fetchData<BorderCountries[]>(API_ENDPOINTS.borderCountries(countries));
}
