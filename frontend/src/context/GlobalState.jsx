import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { validateToken } from '../hooks';

// Create the AuthContext
export const AuthContext = createContext();

// Reducer function to handle authentication state changes
export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, signedIn: true };
    case 'LOGOUT':
      return { ...state, signedIn: false };
    default:
      return state;
  }
};

// AuthContextProvider component to wrap around the parts of your app that need access to the AuthContext
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { 
    signedIn: false
  });

  // Use useEffect to handle side effects
  useEffect(() => {
    const checkAuth = async () => {
      const isAuthenticated = await validateToken();
      console.log(isAuthenticated);
 
      if (isAuthenticated) {
      
        dispatch({ type: 'LOGIN' });
      }
    };

    checkAuth();
  }, [dispatch]); // Empty dependency array ensures this runs only once on mount

    console.log(state);
  
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuthContext = () => {
  const context = useContext(AuthContext);

  // Ensure the hook is used within a valid context provider
  if (!context) {
    throw Error('useAuthContext must be used inside an AuthContextProvider');
  }

  return context;
};
