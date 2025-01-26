import { isRouteErrorResponse, Link, useRouteError } from "react-router";
import { css } from "../../styled-system/css";

function NotFound() {
  const error = useRouteError();

  const linkStyle = css({
    textDecoration: "none",
    fontWeight: 600,
    borderRadius: "6px",
    color: "gray.300",
    fill: "gray.300",
    transition: "125ms linear color, 125ms linear fill",
    _hover: {
      color: "gray.100",
      fill: "gray.100",
    },
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
  });

  return (
    <main
      className={css({
        height: "100svh",
        overflow: "hidden",
        display: "flex",
        justifyContent: {
          base: "start",
          md: "center",
        },
        alignItems: "center",
        paddingInline: {
          base: "1rem",
          md: "2rem",
        },
        position: "relative",
      })}
    >
      <div
        className={css({
          fontSize: {
            base: "1.5rem",
            md: "2rem",
          },
          paddingBottom: "25svh",
        })}
      >
        <h1
          className={css({
            marginBlock: "2rem",
            lineHeight: "1.2",
          })}
        >
          404 - <span className={css({ textWrap: "nowrap" })}>Not Found</span>
        </h1>
        <p className={css({ marginBlock: "2rem", lineHeight: "1.5" })}>
          {isRouteErrorResponse(error)
            ? error.data
            : "Sorry, there's nothing on this URL."}
        </p>
        <Link to="/" className={linkStyle}>
          <svg
            className={css({
              width: "2rem",
              height: "2rem",
            })}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>{" "}
          Back to Home
        </Link>
      </div>
      <div
        className={css({
          position: "absolute",
          top: "40%",
          right: "0",
          width: "80svw",
          transform: "translateY(-50%)",
          zIndex: "-1",
          display: {
            base: "none",
            md: "block",
          },
        })}
      >
        <img
          src="/world-map-dark.png"
          alt=""
          className={css({ width: "100%", height: "auto" })}
        />
      </div>
    </main>
  );
}

export default NotFound;
