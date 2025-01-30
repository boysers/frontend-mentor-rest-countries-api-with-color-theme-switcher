import { css } from "../../styled-system/css";
import { numberFormat } from "../helpers";
import { Country } from "../types";

type OmitKeys = "cca3" | "flags" | "borders";
type CountryInfoListProps = Omit<Country, OmitKeys>;

function CountryInfoList({
  population,
  region,
  capital,
  name,
  subregion,
  tld,
  currencies,
  languages,
}: CountryInfoListProps) {
  const countryInfoListStyle = css({
    display: "flex",
    gap: {
      base: "2rem",
      md: "4rem",
    },
    flexDirection: { base: "column", md: "row" },
  });

  const listStyle = css({
    listStyleType: "none",
    marginBlock: "0.3rem",
    paddingInlineStart: 0,
    flex: 1,
  });

  const itemStyle = css({ marginBlock: "0.3rem" });

  const labelStyle = css({ fontWeight: 600 });

  const valueStyle = css({
    fontWeight: 300,
    color: { base: "gray.900", _dark: "gray.300" },
  });

  return (
    <div className={countryInfoListStyle}>
      <ul className={listStyle}>
        <li className={itemStyle}>
          <strong className={labelStyle}>Native Name:</strong>{" "}
          <span className={valueStyle}>
            {name?.nativeName
              ? Object.entries(name.nativeName)
                  .map(
                    ([lang, { common }]) =>
                      `${common} (${languages?.[lang] || lang})`
                  )
                  .join(", ")
              : "No native name"}
          </span>
        </li>
        <li className={itemStyle}>
          <strong className={labelStyle}>Population:</strong>{" "}
          <span className={valueStyle}>{numberFormat(population)}</span>
        </li>
        <li className={itemStyle}>
          <strong className={labelStyle}>Region:</strong>{" "}
          <span className={valueStyle}>{region}</span>
        </li>
        <li className={itemStyle}>
          <strong className={labelStyle}>Sub Region:</strong>{" "}
          <span className={valueStyle}>{subregion || "No subregion"}</span>
        </li>
        <li className={itemStyle}>
          <strong className={labelStyle}>Capital:</strong>{" "}
          <span className={valueStyle}>
            {capital ? capital.join(", ") : "No capital city."}
          </span>
        </li>
      </ul>
      <ul className={listStyle}>
        <li className={itemStyle}>
          <strong className={labelStyle}>Top Level Domain:</strong>{" "}
          <span className={valueStyle}>{tld ? tld.join(", ") : "No TLD."}</span>
        </li>
        <li className={itemStyle}>
          <strong className={labelStyle}>Currencies:</strong>{" "}
          <span className={valueStyle}>
            {currencies
              ? Object.values(currencies)
                  .map(({ name }) => name)
                  .join(", ")
              : "No currencies."}
          </span>
        </li>
        <li className={itemStyle}>
          <strong className={labelStyle}>Languages:</strong>{" "}
          <span className={valueStyle}>
            {languages ? Object.values(languages).join(", ") : "No languages"}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default CountryInfoList;
