import React from 'react';
import PropTypes from 'prop-types';
import PricelistColumn from './PricelistColumn';

export default function PricelistRow({ index, data }) {
  return (
    <tr className={(index % 2 === 0) ? 'bg-sky-100' : ''}>
      {
        Object.keys(data).map((lensData, i) => {
          const firstColumn = 0;
          return <PricelistColumn data={Object.values(data)[i]} align={(i !== firstColumn) ? 'center' : 'start px-2'} key={lensData} />;
        })
      }
    </tr>
  );
}

PricelistRow.propTypes = {
  index: PropTypes.number.isRequired,
  data: PropTypes.shape({
    lensa: PropTypes.string.isRequired,
    tier1: PropTypes.string.isRequired,
    tier2: PropTypes.string.isRequired,
    tier3: PropTypes.string.isRequired,
  }).isRequired,
};
