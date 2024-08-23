import React, { createContext, useReducer, useContext, useEffect, useState } from 'react';
import { useAuthContext } from './AuthState';
const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

// Create the HotelsContext
export const HotelsContext = createContext();

// Reducer function to handle hotel state changes
export const hotelsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_HOTELS':
      return { ...state, hotels: action.payload };
    case 'CLEAR_HOTELS':
      return { ...state, hotels: [] };
    default:
      return state;
  }
};

// HotelsContextProvider component to wrap around the parts of your app that need access to the HotelsContext
export const HotelsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(hotelsReducer, { hotels: [] });

  return (
    <HotelsContext.Provider value={{ ...state, dispatch }}>
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
