import { useLoaderData, useNavigate, useNavigation } from "react-router";
import { detailLoader } from "./loaders";
import { css } from "../styled-system/css";
import { Country } from "./types";
import CountryInfoList from "./components/CountryInfoList";
import BorderCountryList from "./components/BorderCountryList";

type CountryFlagProps = Pick<Country, "flags">;

function BackHomeButton() {
  const navigate = useNavigate();

  const clickhandle = () => {
    navigate("/");
  };

  const buttonStyle = css({
    backgroundColor: "element",
    fontSize: "1rem",
    fontWeight: 600,
    fontFamily: "body",
    cursor: "pointer",
    border: "none",
    borderRadius: "6px",
    paddingInline: "2rem",
    paddingBlock: "0.5rem",
    display: "inline-flex",
    alignItems: "center",
    transition: "125ms linear color, 125ms linear fill",
    gap: "8px",
    color: {
      base: "input",
      _dark: "gray.300",
    },
    fill: {
      base: "input",
      _dark: "gray.300",
    },
    boxShadow: "md",
    "& svg": {
      transition: "200ms linear transform",
    },
    _hover: {
      color: {
        _dark: "gray.100",
      },
      fill: {
        _dark: "gray.100",
      },
      "& svg": {
        transform: "translateX(-40%)",
      },
    },
  });

  return (
    <button className={buttonStyle} onClick={clickhandle}>
      <svg
        className={css({ width: "1.1rem", height: "1.1rem" })}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
      </svg>{" "}
      Back
    </button>
  );
}

function CountryFlag({ flags }: CountryFlagProps) {
  const flagStyle = css({
    width: "100%",
    height: "auto",
    boxShadow: "xl",
  });
  return <img className={flagStyle} src={flags.svg} alt={flags.alt} />;
}

function Detail() {
  const { country, borderCountries } = useLoaderData<typeof detailLoader>();

  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  const detailStyle = css({
    display: "flex",
    flexDirection: {
      base: "column",
      md: "row",
    },
    gap: {
      base: "2rem",
      lg: "8rem",
    },
    paddingInline: "2rem",
    maxWidth: "80rem",
    marginInline: "auto",
    marginBlock: "2rem",
    position: "relative",
    paddingTop: "6rem",
    transition: "opacity 150ms linear",
  });

  const flagContainerStyle = css({
    flex: 1,
    display: "flex",
    alignItems: "center",
    animation: !isLoading ? "fadeInUp 0.5s forwards" : undefined,
  });

  const countryDetailListStyle = css({
    flex: 1,
    marginTop: "2rem",
    animation: !isLoading ? "fadeInTopRight 0.5s forwards" : undefined,
  });

  return (
    <div className={detailStyle}>
      <div
        className={css({
          position: "absolute",
          top: 0,
          left: "2rem",
        })}
      >
        <BackHomeButton />
      </div>
      <div className={flagContainerStyle}>
        <CountryFlag flags={country.flags} />
      </div>
      <div className={countryDetailListStyle}>
        <h1 className={css({ marginTop: 0 })}>{country.name.common}</h1>
        <CountryInfoList
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country?.capital}
          currencies={country?.currencies}
          languages={country?.languages}
          subregion={country?.subregion}
          tld={country?.tld}
        />
        <div className={css({ marginTop: { base: "2rem", md: "4rem" } })}>
          <BorderCountryList borders={borderCountries} />
        </div>
      </div>
    </div>
  );
}

export default Detail;
