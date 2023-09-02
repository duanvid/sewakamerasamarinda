import React from 'react';
import PropTypes from 'prop-types';

export default function PricelistColumn({ data, align }) {
  const textAlign = `py-2 text-${align}`;
  return (
    <td className={textAlign}>
      {data}
    </td>
  );
}

PricelistColumn.propTypes = {
  align: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};
