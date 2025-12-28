jsx
import React from 'react';

const FilterCafes = ({ onFilterChange }) => {
  const subwayOptions = [
    {
      name: "Арбатская",
      code: "Arbat",
    },
    {
      name: "Александровский сад",
      code: "Alexanders Garden",
    },
    {
      name: "Московская",
      code: "Moscow",
    },
    {
      name: "Парк Культуры",
      code: "Culture",
    },
    {
      name: "Театральная",
      code: "Theater",
    },
  ];

  const handleChange = (e) => {
    if (onFilterChange) {
      onFilterChange(e.target.value);
    }
  };

  return (
    <div className="controls">
      <select name="subway" id="subway" onChange={handleChange}>
        <option value="All">Все</option>
        {subwayOptions.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterCafes;