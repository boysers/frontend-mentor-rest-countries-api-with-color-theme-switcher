import { css } from "../../styled-system/css";
import { Country } from "../types";

type InfoKeys = "population" | "region" | "capital" | "name";

type CountryInfoListProps = Pick<Country, InfoKeys>;

function CountryInfoList({
  population,
  region,
  capital,
  name,
}: CountryInfoListProps) {
  const listStyle = css({
    listStyleType: "none",
    marginBlock: 0,
    paddingInlineStart: 0,
  });

  const listItemStyle = css({ marginBlock: "0.25rem" });

  const labelStyle = css({ fontWeight: 600 });

  const valueStyle = css({
    fontWeight: 300,
    color: { base: "gray.900", _dark: "gray.300" },
  });
  return (
    <ul className={listStyle}>
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
        <strong className={labelStyle}>Capital:</strong>{" "}
        <span className={valueStyle}>
          {capital ? capital?.join(", ") : name.common}
        </span>
      </li>
    </ul>
  );
}

export default CountryInfoList;
