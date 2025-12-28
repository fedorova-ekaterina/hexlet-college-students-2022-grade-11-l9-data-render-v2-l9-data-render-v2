jsx
import React from 'react';
import FilterCafes from './FilterCafes';

const CafesTable = () => {
  return (
    <div id="container" className="container m-3">
      <div className="cafesTable">
        <FilterCafes />
        <ul className="cardsList"></ul>
      </div>
    </div>
  );
};

export default CafesTable;