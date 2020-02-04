import React from 'react';

const Button = ({ onLoadMore }) => (
  <div className="Spinner">
    <button type="button" className="Button" onClick={onLoadMore}>
      Load more...
    </button>
  </div>
);

export default Button;
