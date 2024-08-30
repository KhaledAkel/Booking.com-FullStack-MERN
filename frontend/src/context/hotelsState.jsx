import React, { createContext, useReducer, useContext, useEffect } from 'react';

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const HotelsContext = createContext();

const initialState = {
  hotels: [],
  myHotels: [],
  trendingHotels: [],
  specialHotels: [],
  searchedHotels: [],
};

export const hotelsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ALL_HOTELS':
      return { ...state, hotels: action.payload };
    case 'SET_MY_HOTELS':
      return { ...state, myHotels: action.payload };
    case 'SET_TRENDING_HOTELS':
      return { ...state, trendingHotels: action.payload };
    case 'SET_SPECIAL_HOTELS':
      return { ...state, specialHotels: action.payload };
    case 'SET_SEARCHED_HOTELS':
      return { ...state, searchedHotels: action.payload };
    default:
      return state;
  }
};

export const HotelsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(hotelsReducer, initialState);

  const initialRefresh = async () => {
    try {
      const allHotels = await fetch(`${VITE_API_BASE_URL}/api/hotels/all`, {
        method: "GET",
        credentials: 'include',
      });

      if (allHotels.ok) {
        const hotelsData = await allHotels.json(); 
        dispatch({ type: 'SET_ALL_HOTELS', payload: hotelsData });
        dispatch({ type: 'SET_SEARCHED_HOTELS', payload: hotelsData });
      }
    } catch (err) {
      console.error('Error fetching hotels', err);
    }
  };

  const refreshMyHotels = async () => {
    try {
      const response = await fetch(`${VITE_API_BASE_URL}/api/my-hotels/view`, {
        method: "GET",
        credentials: 'include',
      });

      if (response.ok) {
        const hotelsData = await response.json(); 
        dispatch({ type: 'SET_MY_HOTELS', payload: hotelsData });
      } else if (response.status === 404) {
        console.error('Hotels not found');
      } else {
        console.error('Failed to fetch hotels');
      }
    } catch (err) {
      console.error('Error fetching hotels', err);
    }
  };

  useEffect(() => {
    initialRefresh();
    refreshMyHotels();
  }, []);

  return (
    <HotelsContext.Provider value={{ ...state, refreshMyHotels, initialRefresh, dispatch }}>
      {children}
    </HotelsContext.Provider>
  );
};

export const useHotelsContext = () => {
  const context = useContext(HotelsContext);

  if (!context) {
    throw Error('useHotelsContext must be used inside a HotelsContextProvider');
  }

  return context;
};
