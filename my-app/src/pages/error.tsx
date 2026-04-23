import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  let message = "Unknown error";

  if (isRouteErrorResponse(error)) {
    message = error.statusText;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, something went wrong.</p>
      <i>{message}</i>

      <div>
        <Link to="/">
          <span>Back to homepage</span>
        </Link>
      </div>
    </div>
  );
}
