// Import necessary modules
import { City, Country } from 'country-state-city';
import country from 'country-list-js';

// Get and sort all country names
export const countryNames = country.names().sort();

// Function to get cities by country name
export function getCitiesByCountryName(countryName) {
    // Find the country by name (adjusted to use the correct method)
    const countryInfo = Country.getAllCountries().find(c => c.name === countryName);
  
    // If the country is not found, return an empty array
    if (!countryInfo) return [];
  
    // Get the ISO code of the country
    const countryCode = countryInfo.isoCode; // Updated to use the correct property
  
    // Get the cities using the ISO code
    const cities = City.getCitiesOfCountry(countryCode);
  
    // Return the city names
    return cities.map(city => city.name);
}
