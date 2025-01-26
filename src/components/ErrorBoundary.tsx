import { isRouteErrorResponse, useRouteError } from "react-router";
import { css } from "../../styled-system/css";
import NotFound from "./NotFound";

function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <NotFound />;
    }

    return (
      <div className={css({ textAlign: "center", marginTop: "2rem" })}>
        <h1>Oops! Something went wrong.</h1>
        <p>
          <strong>{error.status}</strong>: {error.statusText}
        </p>
        {error.data && <p>{error.data}</p>}
      </div>
    );
  }

  return (
    <div className={css({ textAlign: "center", marginTop: "2rem" })}>
      <h1>Oops! Something went wrong.</h1>
      <p>Unexpected error occurred.</p>
    </div>
  );
}

export default ErrorBoundary;
