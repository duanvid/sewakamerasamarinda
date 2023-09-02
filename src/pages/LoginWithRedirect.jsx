import {
  FacebookAuthProvider, getRedirectResult, signInWithPopup, signInWithRedirect,
} from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import Loading from '../components/Loading';
import { auth, provider } from '../firebase-config';

export default function LoginWithRedirect() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result === null) {
          setIsLoading(false);
        } else {
          setIsLoading(true);
          (result.user.uid === 'XfkNvyfPayPbFrJoEL5Yj7IRSxz1')
            ? navigate('/admin')
            : navigate('/pricelist');
        }
      })
      .catch((error) => {
        window.alert(error);
      });
  }, []);

  const handleLogin = () => {
    signInWithRedirect(auth, provider);
  };
  const handleLogin2 = () => {
    signInWithPopup(auth, new FacebookAuthProvider());
  };
  return (
    isLoading
      ? (<Loading />)
      : (
        <div className="flex justify-center items-center h-full">
          <div className="bg-white border w-72 h-80 rounded-sm shadow-md flex flex-col items-center p-5">
            <div className="text-xl self-start text-slate-600">Login ke Sewa Kamera Samarinda</div>
            <div className="grid h-fit gap-3 w-full place-items-center grow">
              <GoogleButton
                onClick={handleLogin}
              />
            </div>
          </div>
        </div>
      )
  );
}
