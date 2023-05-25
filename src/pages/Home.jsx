import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase-config';

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user && navigate('/dashboard');
    });
  });
  return (
    <div className="flex justify-center h-full">
      <section className="my-auto">
        <div className="hero grid lg:grid-cols-2 place-items-center">
          <div className="max-w-[768px] p-5 antialiased flex flex-col items-center flex-1 shrink-0">
            <h1 className="lg:text-5xl text-3xl text-center p-5 rounded-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">Preserve your memories with our cameras</h1>
            <div className="flex flex-col justify-center items-center">
              <p className="text-center">
                Baik Anda seorang fotografer berpengalaman atau pemula,
                layanan sewa kami memiliki peralatan fotografi yang pas untuk Anda.
                Rasakan pengalaman fotografi yang berbeda!
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <button type="button" className="py-2 px-5 border rounded-lg bg-pink-400 text-white duration-500"><Link to="/pricelist">Mulai</Link></button>
              <button type="button" className="py-2 px-5 border rounded-lg text-pink-400 bg-white"><Link to="/pricelist">Jelajahi</Link></button>
            </div>
          </div>
          <img src="assets/HeroImage.webp" alt="" className="w-full max-w-[768px] mx-auto max-h-[384px] object-cover" />
        </div>
      </section>
    </div>
  );
}
