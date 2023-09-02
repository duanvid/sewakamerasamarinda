import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import PricelistTable from './Pricelist/PricelistTable';

export default function Pricelist({ data }) {
  const pricelist = data ? data.pricelist : null;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/booking/${data.id}`);
  };

  return (
    pricelist.length
      ? (
        <div className="flex justify-center items-center w-full h-full">
          <div className="bg-white shadow-md rounded-md p-2 sm:p-5 max-w-[384px] overflow-x-auto w-full overflow-y-hidden h-full">
            <div className="flex flex-row items-center">
              <div className="rounded-md shadow-sm shadow-sky-200 border mr-5 shrink-0">
                <img
                  src={data.img}
                  alt={data.type}
                  className="w-[64px] p-2 h-[64px]"
                />
              </div>
              <div className="flex flex-col items-start border-b pb-2">
                <p className="text-lg">{data.type}</p>
                <p className="text-xs text-slate-600">{data.tag}</p>
              </div>
            </div>
            <div className="overflow-hidden">
              <PricelistTable pl={data.pricelist} />
            </div>
            {/* <div className="mt-5">
              <button
                onClick={handleClick}
                className="py-2 px-6 border rounded-md bg-sky-500 text-sm
                text-slate-100 float-right"
                type="button"
              >
                Booking
              </button>
            </div> */}
            <div className="text-xs p-2 bg-sky-100">
              <p>✅ Sudah termasuk memori 💾 dan charger 🔌.</p>
            </div>
          </div>
        </div>
      )
      : (
        <div className="text-center p-5">
          Belum ada data untuk ditampilkan
        </div>
      )
  );
}

Pricelist.defaultProps = {
  data: {
    pricelist: [],
    type: '',
    img: '',
    tag: '',
    id: '',
  },
};

Pricelist.propTypes = {
  data: PropTypes.shape({
    pricelist: PropTypes.arrayOf(
      PropTypes.shape({
        lensa: PropTypes.string,
        tier1: PropTypes.string,
        tier2: PropTypes.string,
        tier3: PropTypes.string,
      }),
    ),
    type: PropTypes.string,
    img: PropTypes.string,
    tag: PropTypes.string,
    id: PropTypes.string,
  }),
};
