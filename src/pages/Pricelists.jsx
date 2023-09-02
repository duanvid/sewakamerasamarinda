import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import pl from '../assets/pricelist.json';
import Pricelist from '../components/Pricelist';
import RentalTips from '../components/RentalTips';
import Accordion from '../components/Accordion';
import LensPricelist from '../components/LensPricelist';

export default function Pricelists() {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  const pathnameWithoutSlash = location.pathname.replace(/^\/+/, '');

  const {
    DSLR,
    mirrorless,
    lensa,
    gimbal,
  } = pl;

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(0);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      <div className="w-full bg-white border-t shadow mx-auto">
        <div className="sm:container py-1 px-5 font-medium items-center
          w-full mx-auto text-slate-500 font-sans flex flex-row justify-between"
        >
          <p>{pathnameWithoutSlash.toUpperCase()}</p>
          <Link to="/prosedur-sewa">
            <p className="py-2 px-5 bg-sky-500 rounded-md text-white
              font-poppins text-sm"
            >
              Prosedur Sewa
            </p>
          </Link>
        </div>
      </div>

      <div className="pricelist__container mx-auto w-full
      bg-[url('https://themesbrand.com/velzon/html/material/assets/images/landing/bg-pattern.png')]
      bg-cover"
      >
        <Accordion
          title="DSLR"
          content={(
            <div
              className="
            grid grid-cols-1 md:grid-cols-2
            xl:grid-cols-3 gap-x-2 gap-y-5 grow
            place-items-start sm:container py-5 duration-500"
            >
              {DSLR.map((kamera) => (
                <Pricelist data={kamera} key={kamera.type} />
              ))}
            </div>
        )}
          index={1}
          activeIndex={activeIndex}
          handleClick={handleClick}
        />
        <Accordion
          title="MIRRORLESS"
          content={(
            <div
              className="
            grid grid-cols-1 md:grid-cols-2
            xl:grid-cols-3 gap-x-2 gap-y-5 grow
            place-items-start sm:container py-5 duration-500"
            >
              <Pricelist data={mirrorless[0]} key="a6000" />
            </div>
        )}
          index={2}
          activeIndex={activeIndex}
          handleClick={handleClick}
        />
        <Accordion
          title="LENSA"
          content={(
            <div className="
            grid grid-cols-1 md:grid-cols-2
            xl:grid-cols-3 gap-x-2 gap-y-5 grow
            place-items-start sm:container py-5 duration-500"
            >
              {lensa.map((lens) => (
                <LensPricelist data={lens} key={lens.name} />
              ))}
            </div>
          )}
          index={3}
          activeIndex={activeIndex}
          handleClick={handleClick}
        />
        <Accordion
          title="TRIPOD DAN GIMBAL"
          content={(
            <div className="
            grid grid-cols-1 md:grid-cols-2
            xl:grid-cols-3 gap-x-2 gap-y-5 grow
            place-items-start sm:container py-5 duration-500"
            >
              {gimbal.map((lens) => (
                <LensPricelist data={lens} key={lens.name} />
              ))}
            </div>
          )}
          index={5}
          activeIndex={activeIndex}
          handleClick={handleClick}
        />
        <Accordion title="ACTION CAM" content={<Pricelist />} index={4} activeIndex={activeIndex} handleClick={handleClick} />
        <Accordion title="FLASH DAN LIGHTING" content={<Pricelist />} index={6} activeIndex={activeIndex} handleClick={handleClick} />
        <Accordion title="TIPS MEMILIH KAMERA" content={<RentalTips />} index={8} activeIndex={activeIndex} handleClick={handleClick} />
      </div>
    </>

  );
}
