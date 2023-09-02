import React from 'react';
import PropTypes from 'prop-types';

export default function LensOptions({
  lenses, lensa, id, setLensa, name,
}) {
  return (
    <select
      id={id}
      className="p-2 border rounded-md"
      onChange={(e) => setLensa(e.target.value)}
      value={lensa}
      name={name}
    >
      {lenses ? Object.keys(lenses).map((lens) => (
        <option key={lens} value={lens}>
          {lenses[lens].name}
        </option>
      )) : <option value={null}>Tidak ada data</option>}
    </select>
  );
}

LensOptions.defaultProps = {
  lenses: null,
};

LensOptions.propTypes = {
  lenses: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    tarif1: PropTypes.number.isRequired,
    tarif2: PropTypes.number.isRequired,
    tarif3: PropTypes.number.isRequired,
  })),
  lensa: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  setLensa: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
