import { css } from "../../styled-system/css";
import { BorderCountries, Country } from "../types";
import BorderCountryList from "./BorderCountryList";
import CountryDetail from "./CountryDetail";

type CountryDetailsProps = {
  country: Country;
  borderCountries: BorderCountries[];
};

function CountryDetailList({ country, borderCountries }: CountryDetailsProps) {
  return (
    <div>
      <h1 className={css({ marginTop: 0 })}>{country.name.common}</h1>
      <CountryDetail {...country} />
      <div className={css({ marginTop: { base: "2rem", md: "4rem" } })}>
        <BorderCountryList borders={borderCountries} />
      </div>
    </div>
  );
}

export default CountryDetailList;
