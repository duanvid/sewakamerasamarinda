import React, { useRef } from 'react';
import {
  RiRoadMapLine, RiWhatsappLine, RiFacebookBoxFill, RiInstagramLine, RiHomeSmileLine, RiBillLine, RiPagesLine, RiCloseLine, RiAccountPinBoxLine,
} from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { auth } from '../firebase-config';

export default function Nav({ isOpen, setIsOpen, isLogin }) {
  const close = () => setIsOpen(false);
  const addresRef = useRef();
  const handleClick = () => {
    addresRef.current.classList.toggle('is-active');
  };
  const navigate = useNavigate();
  const handleLogOut = () => {
    close();
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        window.alert(error);
      });
  };

  return (
    <nav className={`flex flex-col bg-white z-50 fixed h-screen w-72 right-0 shadow-md transform ease-in-out lg:hidden ${
      isOpen
        ? 'transition-all opacity-100 duration-500 translate-x-0'
        : 'transition-all opacity-0 duration-500 translate-x-full'}`}
    >
      <div className=" font-poppins p-5 text-pink-400 font-semibold text-xl flex justify-between items-center">
        Menu
        {' '}
        <button
          type="button"
          className="p-2 shadow-md border mr-5 rounded-md hover:rotate-90 hover:duration-500 duration-500"
          onClick={close}
        >
          <RiCloseLine className="text-2xl" />
        </button>
      </div>
      <ul className="p-2 space-y-1 flex flex-col hover:text-slate-400 text-sky-500 divide-y">
        <li className="p-3 hover:text-pink-400 hover:bg-slate-100 rounded-lg">
          <Link to="/" className="flex flex-row items-center " onClick={close}>
            <RiHomeSmileLine className="mx-2 text-xl" />
            Home
          </Link>
        </li>
        <li className="p-3 hover:text-pink-400 hover:bg-slate-100 rounded-lg">
          <Link to="pricelist" className="flex flex-row items-center" onClick={close}>
            <RiBillLine className="mx-2 text-xl" />
            Pricelist
          </Link>
        </li>
        <li className="p-3 hover:text-pink-400 hover:bg-slate-100 rounded-lg">
          <Link to="blog" className="flex flex-row items-center" onClick={close}>
            <RiPagesLine className="mx-2 text-xl" />
            Blog
          </Link>
        </li>
        { !isLogin
          ? (
            <li className="p-3 hover:text-pink-400 hover:bg-slate-100 rounded-lg">
              <Link to="login" className="flex flex-row items-center " onClick={close}>
                <RiAccountPinBoxLine className="mx-2 text-xl" />
                Login
              </Link>
            </li>
          )
          : (
            <li className="p-3 hover:text-pink-400 hover:bg-slate-100 rounded-lg">
              <Link to="login" className="flex flex-row items-center " onClick={handleLogOut}>
                <RiAccountPinBoxLine className="mx-2 text-xl" />
                Logout
              </Link>
            </li>
          )}
      </ul>
      <div className="space-x-2 text-5xl flex justify-center items-center border-b mx-5 p-5 ">
        <a
          href="https://www.instagram.com/sewakamera_samarinda"
          target="_blank"
          className="text-pink-500"
          rel="noreferrer"
        >
          <RiInstagramLine />
        </a>
        <a
          href="https://www.facebook.com/samarindasewakamera"
          target="_blank"
          className="text-blue-500"
          rel="noreferrer"
        >
          <RiFacebookBoxFill />
        </a>
      </div>
      <div className="flex flex-col text-sky-600 group cursor-pointer mx-5" ref={addresRef}>
        <div
          role="presentation"
          className="flex flex-row p-3 m-2 border-b hover:bg-slate-100 rounded-lg"
          onClick={handleClick}
        >
          <div><RiRoadMapLine className="text-2xl mr-2" /></div>
          <div>Alamat Rental</div>
        </div>
        <div
          className="text-sm w-full flex flex-col max-h-0 overflow-hidden
                group-[.is-active]:max-h-[500px] px-6
                duration-500 ease-in-out bg-slate-200"
        >
          <div className="my-3"><p>Jalan Otto Iskandardinata Gg Steling</p></div>
          <p>
            Gang sebelah Eramart Tenggiri, masuk gang, ada tikungan pertama, belok kanan.
            Rumah pertama sebelah kanan (warna ungu pagar hitam)
          </p>
          <button
            type="button"
            className="p-2 border m-5 bg-pink-400 text-slate-50"
          >
            <a href="https://goo.gl/maps/qqi5EgCDJdPHxyyR7" target="_blank" rel="noreferrer">Buka Google Maps</a>
          </button>
        </div>
      </div>
    </nav>
  );
}

Nav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
};
