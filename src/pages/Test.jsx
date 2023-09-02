/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

export default function Test() {
  const [active, setActive] = useState(0);
  const handleClick = (stat) => {
    if (stat === active) {
      setActive(0);
    } else {
      setActive(stat);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="">
        <div className="border p-5" onClick={() => handleClick(1)}>title1</div>
        <div
          className={active !== 1 ? 'max-h-0 overflow-hidden duration-500 ease-in-out' : 'p-5 max-h-[2000px] duration-500'}
        >
          content
        </div>
      </div>
      <div className="">
        <div className="border p-5 flex flex-row justify-between" onClick={() => handleClick(2)}>
          <div>title2</div>
          <div className={active === 2 ? 'rotate-45 duration-500' : 'duration-500'}>+</div>
        </div>
        <div
          className={active !== 2 ? 'max-h-0 overflow-hidden duration-500' : 'p-5 max-h-20 duration-500'}
        >
          content
        </div>
      </div>
    </div>
  );
}
