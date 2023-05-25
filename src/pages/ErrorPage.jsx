import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div id="error-page" className="container flex mx-auto h-full flex-row">
      <div className="flex justify-center items-center flex-col grow">
        <h1 className="text-7xl font-bold p-5 text-red-400">Oops!</h1>
        <p className="p-5 text-xl text-slate-500 text-center">Sorry, an unexpected error has occurred.</p>
        <p className="p-5 text-slate-100">
          <Link to="/" className="border py-2 px-6 rounded-md bg-red-400">Escape</Link>
        </p>
      </div>
      <div />
    </div>
  );
}
