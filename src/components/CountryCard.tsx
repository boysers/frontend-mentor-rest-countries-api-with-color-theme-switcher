import { memo } from "react";
import { css } from "../../styled-system/css";
import { Countries, Country } from "../types";
import { NavLink } from "react-router";
import { numberFormat } from "../helpers";

type CountryCardProps = { country: Countries };

type CountryFlagProps = Pick<Country, "flags">;

type CountryInfoListKeys = "population" | "region" | "capital" | "name";
type CountryInfoListProps = Pick<Country, CountryInfoListKeys>;

function CountryFlag({ flags }: CountryFlagProps) {
  const imageStyle = css({
    objectFit: "cover",
    width: "100%",
    height: "100%",
    transition: "200ms linear transform",
    _hover: {
      transform: "scale3d(1.05, 1.05, 1.05)",
    },
  });

  return (
    <div
      className={css({
        width: "calc(100% + 3rem)",
        height: "10rem",
        marginTop: "-1.5rem",
        marginInline: "-1.5rem",
        overflow: "hidden",
      })}
    >
      <img src={flags.svg} alt={flags.alt} className={imageStyle} />
    </div>
  );
}

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

  const itemStyle = css({ marginBlock: "0.25rem" });

  const labelStyle = css({ fontWeight: 600 });

  const valueStyle = css({
    fontWeight: 300,
    color: { base: "gray.900", _dark: "gray.300" },
  });

  return (
    <ul className={listStyle}>
      <li className={itemStyle}>
        <strong className={labelStyle}>Population:</strong>{" "}
        <span className={valueStyle}>{numberFormat(population)}</span>
      </li>
      <li className={itemStyle}>
        <strong className={labelStyle}>Region:</strong>{" "}
        <span className={valueStyle}>{region}</span>
      </li>
      <li className={itemStyle}>
        <strong className={labelStyle}>Capital:</strong>{" "}
        <span className={valueStyle}>
          {capital ? capital?.join(", ") : name.common}
        </span>
      </li>
    </ul>
  );
}

function CountryCard({ country }: CountryCardProps) {
  const cardStyle = css({
    maxWidth: "18rem",
    width: "100%",
    backgroundColor: "element",
    borderRadius: "6px",
    padding: "1.5rem",
    paddingBottom: "2.5rem",
    overflow: "hidden",
    boxShadow: "md",
  });

  return (
    <div className={cardStyle}>
      <NavLink to={`/country/${country.cca3.toLowerCase()}`}>
        <CountryFlag flags={country.flags} />
      </NavLink>
      <NavLink
        to={`/country/${country.cca3.toLowerCase()}`}
        className={css({ textDecoration: "none", color: "inherit" })}
      >
        <h2 className={css({ marginBlock: "1.5rem" })}>
          {country.name.common}
        </h2>
      </NavLink>
      <CountryInfoList
        capital={country.capital}
        population={country.population}
        region={country.region}
        name={country.name}
      />
    </div>
  );
}

export default memo(CountryCard);
