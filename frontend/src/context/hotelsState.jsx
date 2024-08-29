import React, { createContext, useReducer, useContext, useEffect, useState } from 'react';

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

// Create the HotelsContext
export const HotelsContext = createContext();

// Reducer function to handle hotel state changes
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
    default:
      return state;
  }
};

// HotelsContextProvider component to wrap around the parts of your app that need access to the HotelsContext
export const HotelsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(hotelsReducer, { hotels: [] });

  const initialRefresh = async () => {
    try {
      const allHotels = await fetch(`${VITE_API_BASE_URL}/api/hotels/all`, {
        method: "GET",
        credentials: 'include',
      });


      if (allHotels.ok) {
        const hotelsData = await allHotels.json(); 
        dispatch({ type: 'SET_ALL_HOTELS', payload: hotelsData });
      }

    } catch (err) {
      console.error('Error fetching hotels', err);
    }
  }


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
    refreshMyHotels(); // Load hotels initially
  }, []);

  return (
    <HotelsContext.Provider value={{ ...state, dispatch, refreshMyHotels }}>
      {children}
    </HotelsContext.Provider>
  );
};

// Custom hook to use the HotelsContext
export const useHotelsContext = () => {
  const context = useContext(HotelsContext);

  if (!context) {
    throw Error('useHotelsContext must be used inside a HotelsContextProvider');
  }

  return context;
};
