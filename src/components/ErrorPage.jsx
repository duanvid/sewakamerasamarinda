import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div id="error-page" className="container flex mx-auto h-full flex-row">
      <div className="flex justify-center items-center flex-col grow">
      <h1 className="text-7xl font-bold p-5">Oops!</h1>
      <p className="p-5 font-semibold">Sorry, an unexpected error has occurred.</p>
      <p className="p-5 text-slate-100 font-bold">
        <i><Link to={`/`} className="border p-3 rounded-md bg-red-400 ">Escape</Link> </i>
      </p>
      </div>
      <div></div>
    </div>
  );
}