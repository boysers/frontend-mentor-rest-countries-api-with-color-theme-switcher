import { LoaderFunctionArgs } from "react-router";
import { BorderCountry, Country } from "./types";
import { handleError } from "./utils";
import {
  fetchCountriesData,
  fetchBorderCountries,
  fetchCountryData,
} from "./api";

export async function homeLoader(): Promise<{ countries: Country[] }> {
  try {
    const countries = await fetchCountriesData();

    // await new Promise((resolve) => setTimeout(resolve, 3000));

    return { countries };
  } catch (error) {
    throw handleError(error);
  }
}

export async function detailLoader({ params }: LoaderFunctionArgs): Promise<{
  country: Country;
  borderCountries: BorderCountry[];
}> {
  if (!params.id)
    throw new Response("Country ID is required", {
      status: 400,
      statusText: "Bad Request",
    });

  // await new Promise((resolve) => setTimeout(resolve, 3000));

  try {
    const country = await fetchCountryData(params.id);

    if (!country) {
      throw new Response("Country not found", {
        status: 404,
        statusText: "Not Found",
      });
    }

    if (!country?.borders || country.borders.length === 0) {
      return { country, borderCountries: [] };
    }

    const borderCountries = await fetchBorderCountries(country.borders);

    return { country, borderCountries };
  } catch (error) {
    throw handleError(error);
  }
}
