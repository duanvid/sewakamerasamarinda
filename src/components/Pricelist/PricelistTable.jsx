import React from 'react';
import PropTypes from 'prop-types';
import PricelistRow from './PricelistRow';

export default function PricelistTable({ pl }) {
  if (!pl.length) {
    (
      <div>kosong</div>
    );
  }

  return (
    <table className="text-xs w-full table-auto mt-5">
      <thead>
        <tr>
          <th className="py-2">
            Lensa
          </th>
          <th className="py-2">
            1-6 jam
          </th>
          <th className="py-2">
            7-12 jam
          </th>
          <th className="py-2">
            13-24 jam
          </th>
        </tr>

      </thead>
      <tbody>
        {
        pl.map((pricelist, index) => (
          <PricelistRow index={index} data={pricelist} key={pricelist.lensa} />
        ))
      }
      </tbody>
    </table>
  );
}

PricelistTable.propTypes = {
  pl: PropTypes.arrayOf(
    PropTypes.shape({
      lensa: PropTypes.string.isRequired,
      tier1: PropTypes.string.isRequired,
      tier2: PropTypes.string.isRequired,
      tier3: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
