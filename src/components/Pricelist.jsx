import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Pricelist({ data }) {
  const pricelist = data ? data.pricelist : null;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/booking/${data.id}`);
  };

  return (
    data.pricelist.length
      ? (
        <div className="col-span-1 m-auto flex justify-center items-center box-content w-full">
          <div className="border rounded-sm p-5 max-w-[384px] overflow-x-auto w-full overflow-y-hidden">
            <div className="flex flex-row items-center">
              <div className="rounded-md border mr-5 shrink-0">
                <img
                  src={data.img}
                  alt={data.type}
                  className="w-[64px] p-2 h-[64px]"
                />
              </div>
              <div className="flex flex-col items-start border-b pb-2">
                <div className="text-lg">{data.type}</div>
                <div className="text-xs text-slate-600">{data.tag}</div>
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="grid grid-flow-col min-w-[256px] text-xs mt-5">
                <ul className="grid grid-flow-row">
                  <li className="font-semibold mb-2">
                    Lensa
                  </li>
                  <li className="bg-sky-100 py-2">
                    +
                    {' '}
                    {pricelist[0].lensa}
                  </li>
                  <li className="py-2">
                    +
                    {' '}
                    {pricelist[1].lensa}
                  </li>
                  <li className="bg-sky-100 py-2">
                    +
                    {' '}
                    {pricelist[2].lensa}
                  </li>
                </ul>
                <ul className="grid grid-flow-row text-center">
                  <li className="font-semibold mb-2">
                    1-6 jam
                  </li>
                  <li className="bg-sky-100 py-2">
                    {pricelist[0].tier1}
                  </li>
                  <li className="py-2">
                    {pricelist[1].tier1}
                  </li>
                  <li className="bg-sky-100 py-2">
                    {pricelist[2].tier1}
                  </li>
                </ul>
                <ul className="grid grid-flow-row text-center">
                  <li className="font-semibold mb-2">
                    7-12 jam
                  </li>
                  <li className="bg-sky-100 py-2">
                    {pricelist[0].tier2}
                  </li>
                  <li className="py-2">
                    {pricelist[1].tier2}
                  </li>
                  <li className="bg-sky-100 py-2">
                    {pricelist[2].tier2}
                  </li>
                </ul>
                <ul className="grid grid-flow-row text-center">
                  <li className="font-semibold mb-2">
                    13-24 jam
                  </li>
                  <li className="bg-sky-100 py-2">
                    {pricelist[0].tier3}
                  </li>
                  <li className="py-2">
                    {pricelist[1].tier3}
                  </li>
                  <li className="bg-sky-100 py-2">
                    {pricelist[2].tier3}
                  </li>
                </ul>
              </div>
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
    pricelist: PropTypes.arrayOf(PropTypes.shape({
      tier1: PropTypes.string,
      tier2: PropTypes.string,
      tier3: PropTypes.string,
    })),
    type: PropTypes.string,
    img: PropTypes.string,
    tag: PropTypes.string,
    id: PropTypes.string,
  }),
};
