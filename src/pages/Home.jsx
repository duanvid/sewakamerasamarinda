import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div
      className="flex items-center justify-center h-full grow w-full
      bg-[url('https://themesbrand.com/velzon/html/material/assets/images/landing/bg-pattern.png')]
      bg-cover bg-white"
    >
      <div className="
        sm:container mx-auto"
      >
        <section className="">
          <div className="hero grid lg:grid-cols-2 place-items-center">
            <div className="max-w-[768px] p-5 antialiased flex flex-col
            items-center flex-1 shrink-0"
            >
              <h1 className="lg:text-5xl text-3xl text-center p-5
              rounded-md font-bold text-transparent bg-clip-text
              bg-gradient-to-r from-pink-400 to-cyan-400"
              >
                Preserve your memories with our cameras
              </h1>
              <div className="flex flex-col justify-center items-center">
                <p className="text-center text-slate-700">
                  Baik Anda seorang fotografer berpengalaman atau pemula,
                  layanan sewa kami memiliki peralatan fotografi yang pas untuk Anda.
                  Rasakan pengalaman fotografi yang berbeda!
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <button type="button" className="py-2 px-5 shadow-md rounded-lg bg-pink-400 text-white duration-500"><Link to="/pricelist">Mulai</Link></button>
                <button type="button" className="py-2 px-5 shadow-md rounded-lg text-pink-400 bg-white"><Link to="/pricelist">Jelajahi</Link></button>
              </div>
            </div>
            <img src="assets/HeroImage.webp" alt="sewa kamera samarinda" className="w-full max-w-[768px] mx-auto max-h-[384px] object-cover" />
          </div>
        </section>
      </div>
    </div>

  );
}
