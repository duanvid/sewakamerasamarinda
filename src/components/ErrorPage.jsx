import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="container flex mx-auto min-h-screen flex-row">
      <div className="flex justify-center items-center flex-col grow">
      <h1 className="text-7xl font-bold p-5">Oops!</h1>
      <p className="p-5 font-semibold">Sorry, an unexpected error has occurred.</p>
      <p className="p-5 text-slate-500">
        <i>{error.statusText || error.message}</i>
      </p>
      </div>
      <div></div>
    </div>
  );
}