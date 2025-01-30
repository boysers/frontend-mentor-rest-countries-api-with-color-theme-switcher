import { LoaderFunctionArgs } from "react-router";
import { BorderCountries, Countries, Country } from "./types";
import { handleError } from "./utils";
import {
  fetchCountriesData,
  fetchBorderCountries,
  fetchCountryData,
} from "./api";

export async function homeLoader(): Promise<{ countries: Countries[] }> {
  try {
    const countries = await fetchCountriesData();
    return { countries };
  } catch (error) {
    throw handleError(error);
  }
}

export async function detailLoader({ params }: LoaderFunctionArgs): Promise<{
  country: Country;
  borderCountries: BorderCountries[];
}> {
  if (!params.id)
    throw new Response("Country ID is required.", {
      status: 400,
      statusText: "Bad Request",
    });

  try {
    const country = await fetchCountryData(params.id);

    if (!country?.borders || country.borders.length === 0) {
      return { country, borderCountries: [] };
    }

    const borderCountries = await fetchBorderCountries(country.borders);

    return { country, borderCountries };
  } catch (error) {
    throw handleError(error);
  }
}
