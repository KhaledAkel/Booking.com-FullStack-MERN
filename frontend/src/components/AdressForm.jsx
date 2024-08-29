import React, { useState } from 'react';
import { countryNames, getCitiesByCountryName } from '../data/lists';

function AddressForm() {
  const [countryName, setCountryName] = useState(countryNames[0]);
  const [cities, setCities] = useState(getCitiesByCountryName(countryName));

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountryName(selectedCountry);
    setCities(getCitiesByCountryName(selectedCountry));
  };

  return (
    <div className='w-1/2 flex flex-col gap-y-3'>
      <div>
        <label htmlFor="name" className='block text-sm font-medium text-gray-700'>
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder='Enter the name of your property'
          className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
        />
      </div>
      
      <div className='w-full flex items-center gap-x-3'>
        <div className='w-[30%]'>
          <label htmlFor="country" className='block text-sm font-medium text-gray-700'>
            Select the Country
          </label>
          <select
            name="country"
            id="country"
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            value={countryName}
            onChange={handleCountryChange}
          >
            {countryNames.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>
        </div>
        
        <div className='w-[30%]'>
          <label htmlFor="city" className='block text-sm font-medium text-gray-700'>
            Select the City
          </label>
          <select
            name="city"
            id="city"
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          >
            {cities.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
        </div>
        
        <div className='w-[30%]'>
          <label htmlFor="type" className='block text-sm font-medium text-gray-700'>
            Select the type
          </label>
          <select
            name="type"
            id="type"
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          >
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="hotel">Hotel</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="description" className='block text-sm font-medium text-gray-700'>
          Description
        </label>
        <textarea
          name="description"
          id="description"
          placeholder='Enter a description'
          className='mt-1 block w-full h-40 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
        />
      </div>
      
      <div className='flex gap-x-4'>
        <div className='flex flex-col'>
          <label htmlFor="facilities" className='block text-sm font-medium text-gray-700'>
            Facilities
          </label>
          <select
            name="facilities"
            id="facilities"
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            multiple
          >
            <option value="Pool">Pool</option>
            <option value="Garden">Garden</option>
            <option value="Balcony">Balcony</option>
            <option value="GYM">GYM</option>
          </select>
        </div>
        
        <div className='flex flex-col'>
          <label htmlFor="adults" className='block text-sm font-medium text-gray-700'>
            Adults
          </label>
          <input
            type="number"
            id="adults"
            name="adults"
            min="0"
            max="5"
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
          
          <label htmlFor="children" className='block text-sm font-medium text-gray-700'>
            Children
          </label>
          <input
            type="number"
            id="children"
            name="children"
            min="1"
            max="5"
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
        </div>
        
        <div className='flex flex-col'>
          <label htmlFor="price" className='block text-sm font-medium text-gray-700'>
            Price
          </label>
          <input
            type="number"
            id="price"
            name="pricePerNight"
            min="1"
            max="30000"
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
          
          <label htmlFor="stars" className='block text-sm font-medium text-gray-700'>
            Stars
          </label>
          <input
            type="number"
            id="stars"
            name="starRating"
            min="1"
            max="5"
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
        </div>
      </div>
    </div>
  );
}

export default AddressForm;
