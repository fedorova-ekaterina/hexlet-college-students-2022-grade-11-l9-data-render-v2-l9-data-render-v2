const FilterCafes = ({ onFilterChange }) => {
  const metroOptions = [
    { name: "Арбатская", value: "Arbat" },
    { name: "Александровский сад", value: "Alexanders Garden" },
    { name: "Московская", value: "Moscow" },
    { name: "Парк Культуры", value: "Culture" },
    { name: "Театральная", value: "Theater" },
  ];

  const handleChange = (event) => {
    if (onFilterChange) {
      onFilterChange(event.target.value);
    }
  };

  return (
    <div className="controls">
      <select name="subway" id="subway" onChange={handleChange}>
        <option value="All">Все</option>
        {metroOptions.map((metro) => (
          <option key={metro.value} value={metro.value}>
            {metro.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterCafes;