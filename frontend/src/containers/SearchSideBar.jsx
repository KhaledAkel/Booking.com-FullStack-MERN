import React, { useState } from 'react';
import Checkbox from '../components/Checkbox';
import { useHotelsContext } from '../context';

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

function SearchSideBar() {
  // State to manage selected filters
  const [selectedFilters, setSelectedFilters] = useState({
    house: false,
    apartment: false,
    villa: false,
    hotel: false,
    pool: false,
    gym: false,
    balcony: false,
    garden: false,
    adults: 0,
    children: 0,
  });

  // Extract the dispatch function from context
  const { dispatch } = useHotelsContext();

  // Handle checkbox changes
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  // Handle number input changes
  const handleNumberChange = (event) => {
    const { name, value } = event.target;
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [name]: Number(value),
    }));
  };

  // Generate query parameters for selected filters
  const generateQueryParams = () => {
    const selectedTypes = Object.keys(selectedFilters)
      .filter(key => selectedFilters[key] === true && ['house', 'apartment', 'villa', 'hotel'].includes(key));
    const selectedFacilities = Object.keys(selectedFilters)
      .filter(key => selectedFilters[key] === true && ['pool', 'gym', 'balcony', 'garden'].includes(key));

    const queryParams = new URLSearchParams();

    if (selectedTypes.length > 0) {
      queryParams.append('type', selectedTypes.join(','));
    }
    if (selectedFacilities.length > 0) {
      queryParams.append('facilities', selectedFacilities.join(','));
    }
    if (selectedFilters.adults > 0) {
      queryParams.append('adults', selectedFilters.adults.toString());
    }
    if (selectedFilters.children > 0) {
      queryParams.append('children', selectedFilters.children.toString());
    }

    return queryParams.toString();
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const queryParams = generateQueryParams();

    try {
      const response = await fetch(`${VITE_API_BASE_URL}/api/search?${queryParams}`, {
        method: 'GET',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      dispatch({ type: 'SET_SEARCHED_HOTELS', payload: data });
    } catch (error) {
      console.error('Error fetching hotels:', error);
      dispatch({ type: 'SET_SEARCHED_HOTELS', payload: [] }); // Clear results on error
    }
  };

  return (
    <div className="w-[30%] max-lg:hidden rounded-xl p-6 shadow-lg">
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-11">
        <div className="flex flex-col items-start">
          <h1 className="font-bold mb-2 text-primary">Type</h1>
          <Checkbox name="house" selectedFilters={selectedFilters} handleCheckboxChange={handleCheckboxChange} />
          <Checkbox name="apartment" selectedFilters={selectedFilters} handleCheckboxChange={handleCheckboxChange} />
          <Checkbox name="villa" selectedFilters={selectedFilters} handleCheckboxChange={handleCheckboxChange} />
          <Checkbox name="hotel" selectedFilters={selectedFilters} handleCheckboxChange={handleCheckboxChange} />
        </div>

        <div className="flex flex-col items-start">
          <h1 className="font-bold mb-2 text-primary">Facilities</h1>
          <Checkbox name="pool" selectedFilters={selectedFilters} handleCheckboxChange={handleCheckboxChange} />
          <Checkbox name="gym" selectedFilters={selectedFilters} handleCheckboxChange={handleCheckboxChange} />
          <Checkbox name="balcony" selectedFilters={selectedFilters} handleCheckboxChange={handleCheckboxChange} />
          <Checkbox name="garden" selectedFilters={selectedFilters} handleCheckboxChange={handleCheckboxChange} />
        </div>

        <div className="flex flex-col items-start">
          <h1 className="font-bold mb-2 text-primary">Number of Adults</h1>
          <input
            type="number"
            name="adults"
            value={selectedFilters.adults}
            onChange={handleNumberChange}
            min="0"
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="flex flex-col items-start">
          <h1 className="font-bold mb-2 text-primary">Number of Children</h1>
          <input
            type="number"
            name="children"
            value={selectedFilters.children}
            onChange={handleNumberChange}
            min="0"
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">Search</button>
      </form>
    </div>
  );
}

export default SearchSideBar;
