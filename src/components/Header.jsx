import React from 'react';
import { RiMenuFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavDesktop from './NavDesktop';

export default function Header({ setIsOpen, isLogin }) {
  return (
    <header className="bg-white flex justify-between items-center
      lg:container mx-auto w-full"
    >
      <h1
        className="lg:text-4xl text-2xl font-bold text-transparent
          bg-clip-text bg-gradient-to-r from-pink-400 to-sky-400
          w-fit antialiased p-5"
      >
        <Link to="/">Sewa Kamera Samarinda</Link>
      </h1>
      <div className="p-5">
        <NavDesktop isLogin={isLogin} />
        <button
          type="button"
          className="p-2 border rounded-md text-2xl hover:bg-sky-500 hover:text-slate-50
            hover:duration-500 duration-500 lg:hidden shadow-md"
          onClick={() => setIsOpen(true)}
          aria-label="Menu Button"
        >
          <RiMenuFill aria-label="Menu" />
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
};
