import { isRouteErrorResponse, Link, useRouteError } from "react-router";
import { css } from "../../styled-system/css";
import { useEffect } from "react";

function ErrorBoundary() {
  const error = useRouteError();

  const isEnvNodeDev = import.meta.env.DEV;

  let title = "Oops! Something went wrong.";
  let message = "Unexpected error occurred.";
  let isNotFound = false;
  let data = "";

  if (isRouteErrorResponse(error)) {
    data = error.data;
    switch (error.status) {
      case 404:
        title = "404. Not Found.";
        message = "Sorry, there's nothing on this URL.";
        isNotFound = true;
        break;
      default:
        break;
    }
  } else if (isEnvNodeDev && error instanceof Error) {
    title = error.name;
    message = error.message;
    data = error?.stack || "";
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-color-mode", "dark");
  }, []);

  return (
    <main
      className={css({
        minHeight: "100svh",
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
          pb: "20svh",
        })}
      >
        <h1 className={css({ mb: "2rem", lineHeight: "1.2" })}>{title}</h1>
        <p className={css({ mb: "2rem" })}>{message}</p>
        {isEnvNodeDev && data && (
          <code
            className={css({
              display: "block",
              marginBlock: "2rem",
              lineHeight: "1.5",
              whiteSpace: "pre-wrap",
              fontSize: "0.5em",
            })}
          >
            {data}
          </code>
        )}
        {isNotFound && (
          <Link
            to="/"
            className={css({
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
              fontSize: "0.75em",
            })}
          >
            <svg
              className={css({
                width: "1.2em",
                height: "1.2em",
              })}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>{" "}
            Back to Home
          </Link>
        )}
        <div
          className={css({
            position: "absolute",
            top: "45%",
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
            alt="background world map."
            className={css({ width: "100%", height: "auto" })}
          />
        </div>
      </div>
    </main>
  );
}

export default ErrorBoundary;
