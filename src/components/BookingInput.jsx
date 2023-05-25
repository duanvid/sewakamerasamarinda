import React from 'react';
import PropTypes from 'prop-types';

export default function BookingInput({
  id, label, type, value, disabled,
}) {
  return (
    <label htmlFor={id} className="flex flex-col">
      <div className="py-2">
        {label}
      </div>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        disabled={disabled}
        className="border p-2 rounded-md"
      />
    </label>
  );
}

BookingInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}.isRequired;
