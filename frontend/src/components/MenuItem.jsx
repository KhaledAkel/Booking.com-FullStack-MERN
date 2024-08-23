import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context';
import { IoMdArrowRoundBack } from "react-icons/io";



function MenuItem({ clicked, setClicked }) {
  const { dispatch } = useAuthContext(); // Use your auth context to get dispatch
  const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

  const handleLogout = async (dispatch) => {
    try {
        const response = await fetch(`${VITE_API_BASE_URL}/api/auth/sign-out`, {
            method: 'POST',
            credentials: 'include', // Ensure cookies are sent with the request
        });
        if (response.ok) {
            // Dispatch the LOGOUT action
            dispatch({ type: 'LOGOUT' });
            // Redirect to the home page or login page
            window.location.href = '/';
        } else {
            console.error('Logout failed');
        }
    } catch (error) {
        console.error('Error during logout:', error);
    }
};
  return (
    <div className='w-[200px] bg-white max-lg:bg-primary shadow-2xl max-lg:fixed 
    absolute lg:top-10 lg:right-0 max-lg:justify-center max-lg:items-center max-lg:text-4xl max-lg:gap-y-7 max-lg:text-white
    max-lg:w-[100vw] max-lg:h-[100vh] max-lg:bottom-0 max-lg:left-0
    flex flex-col gap-y-2 z-20 rounded-lg p-7 font-semibold'>
      <Link to='/my-account' className='hover:underline hover:text-tertiary'>My Account</Link>
      <Link to='/my-bookings' className='hover:underline hover:text-tertiary'>My Bookings</Link>
      <Link to='/my-hotels' className='hover:underline hover:text-tertiary'>My Hotels</Link>
      <div onClick={() => handleLogout(dispatch)} className='cursor-pointer hover:underline hover:text-tertiary'>
        Log Out
      </div>
      <IoMdArrowRoundBack 
      className='text-3xl text-white cursor-pointer lg:hidden fixed top-10 right-10'
      onClick={() => setClicked(false)} />
      
    </div>

  );
}

export default MenuItem;
