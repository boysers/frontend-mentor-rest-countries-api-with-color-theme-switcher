import { useLoaderData, useLocation } from "react-router";
import { homeLoader } from "./loaders";
import { css } from "../styled-system/css";
import CountryCard from "./components/CountryCard";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Country } from "./types";
import { useQuery, useRegion } from "./hook";

const filterByName = (country: Country, query: string) => {
  const nameMatch = country.name.common
    .toLowerCase()
    .includes(query.trim().toLowerCase());

  const nativeNameMatch =
    country.name.nativeName &&
    Object.values(country.name.nativeName).some((name) =>
      name.common.toLowerCase().includes(query.toLowerCase().trim())
    );

  return nameMatch || nativeNameMatch;
};

const filterByRegion = (country: Country, region: string) => {
  return (
    !region || country.region.toLowerCase() === region.trim().toLowerCase()
  );
};

function Home() {
  const { countries } = useLoaderData<typeof homeLoader>();
  const location = useLocation();

  const { query, setQuery } = useQuery();
  const { region, setRegion } = useRegion();
  const [page, setPage] = useState(1);

  const itemsPerPage = 20;

  const filteredCountries = useMemo(() => {
    return countries
      .filter(
        (country) =>
          filterByName(country, query) && filterByRegion(country, region)
      )
      .slice(0, page * itemsPerPage);
  }, [countries, page, query, region]);

  const regions = useMemo(() => {
    const regionSet = countries.reduce((acc, country) => {
      acc.add(country.region);
      return acc;
    }, new Set<string>());
    return Array.from(regionSet);
  }, [countries]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setPage(1);
  };

  const handleReset = () => {
    setQuery("");
    setRegion("");
    setPage(1);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 200
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.state, query, region]);

  const containerStyle = css({
    fontSize: "0.875rem",
    display: "grid",
    gridTemplateColumns: {
      base: "1fr",
      sm: "repeat(2, 1fr)",
      md: "repeat(3, 1fr)",
      lg: "repeat(4, 1fr)",
    },
    flexWrap: "wrap",
    gap: {
      base: "2rem",
      lg: "4rem",
    },
    justifyContent: "center",
    justifyItems: "center",
    marginBlock: "3rem",
  });

  const inputStyle = css({
    backgroundColor: "element",
    border: "none",
    paddingBlock: "1.25rem",
    paddingInline: "2rem",
    paddingLeft: 20,
    fontSize: "0.875rem",
    color: { base: "input", _dark: "gray.300" },
    maxWidth: "30rem",
    width: "100%",
    borderRadius: "4px",
    boxShadow: "md",
    boxSizing: "border-box",
    _placeholder: {
      color: { base: "input", _dark: "gray.400" },
    },
    _focus: {
      outline: "none",
    },
  });

  const selectStyle = css({
    backgroundColor: "element",
    border: "none",
    paddingBlock: "1.25rem",
    paddingInline: "1.5rem",
    fontSize: "0.875rem",
    color: { base: "gray.800", _dark: "gray.300" },
    maxWidth: "12.5rem",
    width: "100%",
    borderRadius: "4px",
    boxShadow: "md",
    _placeholder: {
      color: "gray.400",
    },
    _focus: {
      outline: "none",
    },
  });

  return (
    <div
      className={css({
        maxWidth: "80rem",
        marginInline: "auto",
        paddingInline: "2rem",
      })}
    >
      <div
        className={css({
          display: "flex",
          marginTop: "3rem",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "3rem",
        })}
      >
        <div
          className={css({
            position: "relative",
            maxWidth: "30rem",
            width: "100%",
          })}
        >
          <svg
            className={css({
              fill: "text",
              width: 5,
              position: "absolute",
              top: "50%",
              left: 8,
              transform: "translateY(-50%)",
            })}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
          <input
            type="text"
            name="country"
            placeholder="Search for a country..."
            className={inputStyle}
            onChange={handleInput}
            value={query}
          />
        </div>
        <select
          name="region"
          className={selectStyle}
          value={region}
          onChange={(e) => {
            setRegion(e.target.value);
          }}
        >
          <option value="">Filter by Region</option>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
      <div className={containerStyle}>
        {filteredCountries.length > 0 ? (
          filteredCountries.slice(0, page * itemsPerPage).map((country) => (
            <article
              key={country.cca3}
              className={css({
                color: "inherit",
                textDecoration: "none",
                display: "flex",
                maxWidth: "18rem",
                width: "100%",
                animation: "fadeInDown 0.5s",
              })}
            >
              <CountryCard country={country} />
            </article>
          ))
        ) : (
          <div
            className={css({
              gridColumn: "1/5",
              fontSize: "1.25rem",
              color: {
                base: "gray.500",
                _dark: "gray.300",
              },
              textAlign: "center",
              animation: "fadeIn",
              animationDelay: { base: "0.25s", md: "0s" },
              animationDuration: "0.5s",
              animationFillMode: "both",
            })}
            role="alert"
            aria-live="polite"
          >
            <p className={css({ marginBlock: "1rem" })}>No countries found!</p>
            <button
              onClick={handleReset}
              className={css({
                background: "none",
                border: "none",
                color: {
                  base: "blue.400",
                  _hover: {
                    base: "blue.500",
                    _dark: "blue.300",
                  },
                },
                cursor: "pointer",
                fontSize: "1rem",
                transition: "75ms linear color",
              })}
              aria-label="Reset search query"
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
