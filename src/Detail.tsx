import { useLoaderData, useNavigate, useNavigation } from "react-router";
import { detailLoader } from "./loaders";
import { css } from "../styled-system/css";
import CountryFlag from "./components/CountryFlag";
import CountryDetailList from "./components/CountryDetailList";

function Detail() {
  const { country, borderCountries } = useLoaderData<typeof detailLoader>();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  const containerStyle = css({
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

  const flagStyle = css({
    flex: 1,
    display: "flex",
    alignItems: "center",
    animation: !isLoading ? "fadeInUp 0.5s forwards" : undefined,
  });

  const countryDetailsStyle = css({
    flex: 1,
    marginTop: "2rem",
    animation: !isLoading ? "fadeInTopRight 0.5s forwards" : undefined,
  });

  const clickhandle = () => {
    navigate("/");
  };

  return (
    <div className={containerStyle}>
      <div
        className={css({
          position: "absolute",
          top: 0,
        })}
      >
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
      </div>
      <div className={flagStyle}>
        <CountryFlag flag={country.flags} />
      </div>
      <div className={countryDetailsStyle}>
        <CountryDetailList
          country={country}
          borderCountries={borderCountries}
        />
      </div>
    </div>
  );
}

export default Detail;
