import React, { useState } from 'react';
import { RiWhatsappLine } from 'react-icons/ri';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-10 md:right-10 right-5">
      <div className="bg-green-500 rounded-md shadow-md  border-2">
        <div
          className="w-[56px] h-[56px] p-2
          flex items-center justify-center text-4xl text-white"
          onClick={handleClick}
          role="button"
          aria-label="whatsapp button"
          onKeyDown={handleClick}
          tabIndex={0}
        >
          <i className={`transition-all duration-300 ${
            isOpen ? 'rotate-[360deg]' : ''
          }`}
          >
            <RiWhatsappLine />

          </i>
        </div>
      </div>

      <div className={`fixed bottom-24 md:right-10 right-5 rounded-md
        shadow-md max-w-xs
        ${
          isOpen
            ? 'whatsapp__show'
            : 'whatsapp__hidden'
        }`}
      >
        <div className="bg-sky-500 p-5 rounded-t-md font-medium">
          <p className="text-white"><strong>Informasi lebih lanjut !</strong></p>
          <p className="text-sm text-slate-700">Silahkan klik nomor admin dibawah ini!</p>
        </div>
        <div className="p-5 grid grid-cols-1 bg-white rounded-b-md gap-3">
          <button
            className="border-l-4 rounded-md border-sky-500 bg-sky-100 p-2
            flex flex-row items-center space-x-2 whatsapp__button"
            type="button"
          >
            <p className="text-3xl text-green-500 btn__icon"><RiWhatsappLine /></p>
            <p className="text-slate-600 text-sm font-medium">
              <a
                href="https://wa.me/6281250115100?text=Halo%20Kak%20Saya%20mau%20booking%20kamera"
                target="_blank"
                className="text-slate-800"
                rel="noreferrer"
              >
                Admin sewa Kamera
              </a>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
