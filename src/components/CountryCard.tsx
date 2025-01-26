import { memo } from "react";
import { css } from "../../styled-system/css";
import { Country } from "../types";
import CountryInfoList from "./CountryInfoList";
import { NavLink } from "react-router";

function CountryCard({ country }: { country: Country }) {
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
    <div className={cardStyle}>
      <NavLink to={`/country/${country.cca3.toLowerCase()}`}>
        <div
          className={css({
            width: "calc(100% + 3rem)",
            height: "10rem",
            marginTop: "-1.5rem",
            marginInline: "-1.5rem",
            overflow: "hidden",
          })}
        >
          <img
            src={country.flags.svg}
            alt={country.flags.alt}
            className={imageStyle}
          />
        </div>
      </NavLink>
      <NavLink
        to={`/country/${country.cca3.toLowerCase()}`}
        className={css({
          textDecoration: "none",
          color: "inherit",
        })}
      >
        <h2
          className={css({
            marginBlock: "1.5rem",
          })}
        >
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
