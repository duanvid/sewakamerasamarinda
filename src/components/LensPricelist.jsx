import React from 'react';
import PropTypes from 'prop-types';

export default function LensPricelist({ data }) {
  return (
    <div className="p-2 bg-white
      shadow-md rounded-md flex flex-row
      items-center max-w-[384px] w-full h-full
      mx-auto"
    >
      <img
        src={data.image}
        alt={data.name}
        className="w-[96px] h-[96px] mr-3 shrink-0
        object-center object-cover rounded-md p-2"
      />
      <div className="w-full">
        <div className="text-xs font-semibold mb-2">
          {data.name}
        </div>
        <div className="text-xs">
          <table className="w-full table-fixed">
            <tbody className="text-center">
              <tr className="font-semibold bg-sky-200">
                <td className="py-2">1-6 jam</td>
                <td>7-12 jam</td>
                <td>13-24 jam</td>
              </tr>
              <tr className="">
                <td className="py-2">{data.tier1}</td>
                <td>{data.tier2}</td>
                <td>{data.tier3}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

LensPricelist.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    tier1: PropTypes.string,
    tier2: PropTypes.string,
    tier3: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
