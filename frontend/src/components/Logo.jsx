import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div>
        <Link to='/' className='text-2xl font-bold cursor-pointer relative z-20 '>
            Booking
            <span className="text__color-primary">.com</span>
        </Link>
    </div>
  )
}

export default Logo
