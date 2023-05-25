import React from 'react';
import PropTypes from 'prop-types';

export default function ArticleParagraph({ data, index }) {
  return (
    <div className={(index % 2 === 0) ? 'bg-slate-200 p-5' : 'p-5'}>
      <p className="font-semibold mb-2 text-cyan-500">{data.head}</p>
      <p className="">{data.body}</p>
    </div>
  );
}

ArticleParagraph.propTypes = {
  data: PropTypes.shape({
    head: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
