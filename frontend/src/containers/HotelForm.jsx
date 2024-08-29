import React from 'react'
import { AdressForm, ImagesForm } from '../components'
import { IoMdArrowRoundForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

function HotelForm() {
  const navigate = useNavigate(); // To navigate after form submission

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    // male formdata as a json object
    const formObject = {};
    formData.forEach((value, key) => formObject[key] = value);
    console.log(formObject);


    try {
      const response = await fetch(`${VITE_API_BASE_URL}/api/my-hotels/create`, {
          method: "POST",
          body: formData,  // Use formData instead of JSON
          credentials: 'include',
      });

      if (response.ok) {
          console.log("Hotel added successfully");
          navigate('/'); // Redirect to the homepage or any other page after successful submission
      } else {
          const responseData = await response.json();
          console.error("Failed to add hotel:", responseData.message);
      }
    } catch (error) {
      console.log("Network error. Please try again later.");
    }
  }

  return (
    <div className='w-3/4 h-3/4 bg-white max-lg:w-[90%] mx-auto rounded-xl shadow-xl p-14'>
        <form action="" className='w-full flex gap-x-9' onSubmit={handleSubmit} encType="multipart/form-data">    
            <AdressForm />
            <ImagesForm />
            <button type='submit'>
                <IoMdArrowRoundForward className='text-5xl text-primary'/>
            </button>
        </form>
    </div>
  )
}

export default HotelForm
