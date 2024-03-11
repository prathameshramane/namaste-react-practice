import { useRouteError } from "react-router-dom";

const Error = () => {
  const { status, statusText } = useRouteError();
  return (
    <>
      <h1>Opps</h1>
      <h2>Something went wrong!!</h2>
      <p>
        {status} : {statusText}
      </p>
    </>
  );
};

export default Error;
