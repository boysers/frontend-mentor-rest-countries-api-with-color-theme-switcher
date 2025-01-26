import { css } from "../../styled-system/css";
import { Country } from "../types";

type InfoKeys =
  | "name"
  | "population"
  | "region"
  | "subregion"
  | "capital"
  | "tld"
  | "currencies"
  | "languages";

type CountryInfoListProps = Pick<Country, InfoKeys>;

function CountryDetail({
  population,
  region,
  capital,
  name,
  subregion,
  tld,
  currencies,
  languages,
}: CountryInfoListProps) {
  const listStyle = css({
    listStyleType: "none",
    marginBlock: "0.3rem",
    paddingInlineStart: 0,
    flex: 1,
  });

  const listItemStyle = css({ marginBlock: "0.3rem" });

  const labelStyle = css({ fontWeight: 600 });

  const valueStyle = css({
    fontWeight: 300,
    color: { base: "gray.900", _dark: "gray.300" },
  });

  return (
    <div
      className={css({
        display: "flex",
        gap: {
          base: "2rem",
          md: "4rem",
        },
        flexDirection: { base: "column", md: "row" },
      })}
    >
      <ul className={listStyle}>
        <li className={listItemStyle}>
          <strong className={labelStyle}>Native Name:</strong>{" "}
          <span className={valueStyle}>
            {name.nativeName
              ? Object.entries(name.nativeName)
                  .map(
                    ([lang, { common }]) =>
                      `${common} (${languages?.[lang] || lang})`
                  )
                  .join(", ")
              : "No native name"}
          </span>
        </li>
        <li className={listItemStyle}>
          <strong className={labelStyle}>Population:</strong>{" "}
          <span className={valueStyle}>
            {new Intl.NumberFormat().format(population)}
          </span>
        </li>
        <li className={listItemStyle}>
          <strong className={labelStyle}>Region:</strong>{" "}
          <span className={valueStyle}>{region}</span>
        </li>
        <li className={listItemStyle}>
          <strong className={labelStyle}>Sub Region:</strong>{" "}
          <span className={valueStyle}>{subregion}</span>
        </li>
        <li className={listItemStyle}>
          <strong className={labelStyle}>Capital:</strong>{" "}
          <span className={valueStyle}>
            {capital ? capital?.join(", ") : name.common}
          </span>
        </li>
      </ul>

      <ul className={listStyle}>
        <li className={listItemStyle}>
          <strong className={labelStyle}>Top Level Domain:</strong>{" "}
          <span className={valueStyle}>{tld?.join(", ")}</span>
        </li>
        <li className={listItemStyle}>
          <strong className={labelStyle}>Currencies:</strong>{" "}
          <span className={valueStyle}>
            {currencies
              ? Object.values(currencies)
                  .map(({ name }) => name)
                  .join(", ")
              : "No currency"}
          </span>
        </li>
        <li className={listItemStyle}>
          <strong className={labelStyle}>Languages:</strong>{" "}
          <span className={valueStyle}>
            {languages ? Object.values(languages).join(", ") : "No language"}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default CountryDetail;
