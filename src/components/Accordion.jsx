import React from 'react';
import PropTypes from 'prop-types';

export default function Accordion({
  title, content, index, activeIndex, handleClick,
}) {
  return (
    <div
      className={`accordion__container flex flex-col ${
        activeIndex === index
          ? 'group is-active'
          : ''}`}
    >
      <div
        className="accordion__header p-5 flex justify-between sm:container
        w-full flex-row mx-auto border-b
        group-[.is-active]:font-semibold hover:cursor-pointer
        duration-500 hover:bg-white hover:bg-opacity-25"
        onClick={() => handleClick(index)}
        role="presentation"
      >
        <h2 className="text-slate-600 font-medium text-sm sm:text-base">{title}</h2>
        <div className="flex rotate-90 items-center justify-center  group-[.is-active]:-rotate-90 duration-500">
          <span>{'>'}</span>
        </div>
      </div>

      <div className="accordion__body sm:container mx-auto w-full">
        <div className="group-[.is-active]:flex duration-500 hidden transition-all overflow-hidden">
          {content}
        </div>
      </div>

    </div>
  );
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};
