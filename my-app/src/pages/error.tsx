import { Button, Result } from "antd";
import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  let message = "Unknown error";

  if (isRouteErrorResponse(error)) {
    message = error.statusText;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div>
      <Result
        status="403"
        title="Oops!"
        subTitle={message}
        extra={
          <Button type="primary">
            <Link to="/">
              <span>Back to homepage</span>
            </Link>
          </Button>
        }
      />
    </div>
  );
}
