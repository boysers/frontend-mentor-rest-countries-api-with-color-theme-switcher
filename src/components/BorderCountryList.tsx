import { Link } from "react-router";
import { css } from "../../styled-system/css";
import type { BorderCountries } from "../types";

type BorderCountryListProps = { borders: BorderCountries[] };

function BorderCountryList({ borders }: BorderCountryListProps) {
  const borderCountryListStyle = css({
    display: "flex",
    gap: "1rem",
    flexDirection: {
      base: "column",
      md: "row",
    },
  });

  const labelStyle = css({
    fontWeight: 600,
    whiteSpace: "nowrap",
    paddingBlock: "0.3rem",
  });

  const listStyle = css({
    display: "flex",
    flexWrap: "wrap",
    listStyleType: "none",
    padding: 0,
    margin: 0,
    gap: "0.5rem",
  });

  const itemStyle = css({ margin: 0 });

  const linkStyle = css({
    display: "block",
    textDecoration: "none",
    cursor: "pointer",
    fontWeight: 300,
    backgroundColor: "element",
    borderRadius: "4px",
    paddingInline: "0.5rem",
    paddingBlock: "0.3rem",
    color: { base: "gray.900", _dark: "gray.300" },
    transition: "125ms linear color",
    boxShadow: "md",
    _hover: {
      color: {
        _dark: "gray.100",
      },
    },
  });

  const emptyBorderCountriesStyle = css({
    margin: 0,
    paddingBlock: "0.3rem",
    color: {
      base: "gray.900",
      _dark: "gray.300",
    },
    fontWeight: "300",
  });

  return (
    <div className={borderCountryListStyle}>
      <span className={labelStyle}>Border Countries:</span>{" "}
      {borders.length > 0 ? (
        <ul className={listStyle}>
          {borders.map((border) => (
            <li key={border.cca3} className={itemStyle}>
              <Link
                to={`/country/${border.cca3.toLowerCase()}`}
                className={linkStyle}
              >
                {border.name.common}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className={emptyBorderCountriesStyle}>
          Bordering countries are not present.
        </p>
      )}
    </div>
  );
}

export default BorderCountryList;
