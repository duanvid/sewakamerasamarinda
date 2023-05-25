import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';

export default function NavDesktop({ isLogin }) {
  const navigate = useNavigate();
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        window.alert(error);
      });
  };

  return (
    <nav className="hidden lg:block">
      <ul className="flex space-x-5 text-lg text-sky-400 hover:text-slate-400">
        <li className="hover:text-pink-500 hover:underline"><Link to="/">Home</Link></li>
        <li className="hover:text-pink-500 hover:underline"><Link to="/pricelist">Pricelist</Link></li>
        <li className="hover:text-pink-500 hover:underline"><Link to="blog">Blog</Link></li>
        {
          !isLogin
            ? <li className="hover:text-pink-500 hover:underline"><Link to="login">Sign In</Link></li>
            : (
              <li
                className="hover:text-pink-500 hover:underline hover:cursor-pointer"
                onClick={handleLogOut}
                role="presentation"
              >
                Sign Out
              </li>
            )
        }
      </ul>
    </nav>
  );
}

NavDesktop.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};
