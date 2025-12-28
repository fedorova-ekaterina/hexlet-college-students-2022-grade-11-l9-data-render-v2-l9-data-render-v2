import { useState, useEffect } from 'react';
import FilterCafes from './FilterCafes.jsx';

const CafesTable = () => {
  const [cafes, setCafes] = useState([]);
  const [filteredCafes, setFilteredCafes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCafes = async () => {
      try {
        setLoading(true);
        const response = await fetch('/cafes');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched cafes:', data);
        setCafes(data);
        setFilteredCafes(data);
      } catch (error) {
        console.error('Error fetching cafes:', error);
       
        if (window.cafesData) {
          setCafes(window.cafesData);
          setFilteredCafes(window.cafesData);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCafes();
  }, []);

  const handleFilterChange = (metroCode) => {
    console.log('Filter changed to:', metroCode);
    if (metroCode === 'All') {
      setFilteredCafes(cafes);
    } else {
      const filtered = cafes.filter(cafe => cafe.subway === metroCode);
      console.log('Filtered cafes:', filtered);
      setFilteredCafes(filtered);
    }
  };

  if (loading) {
    return (
      <div className="cafesTable">
        <FilterCafes onFilterChange={handleFilterChange} />
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="cafesTable">
      <FilterCafes onFilterChange={handleFilterChange} />
      <ul className="cardsList">
        {filteredCafes.map((cafe, index) => (
          <li key={cafe.id || index} className="card">
            <img 
              src={cafe.imageUrl || 'https://via.placeholder.com/150'} 
              alt={cafe.name || 'Cafe'} 
            />
            <h2>{cafe.name || 'Unnamed Cafe'}</h2>
            <p>{cafe.description || 'No description'}</p>
            <p>{cafe.address || 'No address'}</p>
            <p>Subway: {cafe.subway || 'Unknown'}</p>
            <p>{cafe.workingHours || 'Hours not specified'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CafesTable;