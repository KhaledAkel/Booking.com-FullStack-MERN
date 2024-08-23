import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, MyHotelsContainer } from '../containers'

function MyHotels() {
  return (
    <div className='w-full bg-white min-h-screen mt-2'>
        <Navbar />
        <div>
            <Link to='/add-hotel' ></Link>
        </div>
        <MyHotelsContainer />
    </div>
  )
}

export default MyHotels
