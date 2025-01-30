import { Link } from "react-router";
import { css } from "../../styled-system/css";
import ColorModeButton from "./ColorModeButton";

function Header() {
  const headerStyle = css({
    backgroundColor: "element",
    height: "80px",
    boxShadow: "md",
  });

  const containerStyle = css({
    display: "flex",
    maxWidth: "80rem",
    marginInline: "auto",
    justifyContent: "space-between",
    placeItems: "center",
    height: "100%",
    paddingInline: "2rem",
  });

  return (
    <header className={headerStyle}>
      <div className={containerStyle}>
        <Link
          to="/"
          className={css({ textDecoration: "none", color: "inherit" })}
        >
          <h1
            className={css({
              fontSize: { base: "1.125rem", md: "1.5rem" },
              m: 0,
            })}
          >
            Where in the world?
          </h1>
        </Link>
        <ColorModeButton />
      </div>
    </header>
  );
}

export default Header;
