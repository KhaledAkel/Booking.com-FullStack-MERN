import React from 'react'
import { Link } from 'react-router-dom'
import { Rating } from '../components'
import { IoChevronForwardSharp } from "react-icons/io5";
import { CiTrash } from "react-icons/ci";
import { FaPencilAlt } from "react-icons/fa";

function HotelCard(props) {
    const {image, name, adress, description, type, adults, children, facilities, pricePerNight, starRating, owner} = props
    let facilitiesList = ''
    for (let i = 0; i < facilities.length; i++) {
        facilitiesList += '#' + facilities[i] + ' '
    }
  return (
    <div className='w-full h-[300px] max-md:h-[500px] rounded-xl p-3 flex max-md:flex-col shadow-sm border-gray-300 border'>
        <div className='w-[30%] max-md:w-full h-full max-md:h-[50%]'>
            <img src={image} alt="" className='object-cover rounded-xl w-full h-full'/>
        </div>
        <div className='w-[70%] max-md:w-full h-full max-md:h-[50%] flex justify-between p-4'>
            <div className='h-full flex flex-col content-between'>
                <div className='h-1/2'>
                    <h1 className='text-xl text-primary font-semibold'>{name}</h1>
                    <p className='text-sm text-gray-600'>{adress}</p>
                    <p className='text-[0.7rem] text-gray-600 mt-3 overflow-clip'>{description}</p>
                </div>
                <div className='h-1/2 flex '>
                    <div className='h-full w-[1px] bg-gray-500'/>
                    <div className='h-full flex flex-col justify-end text-[0.7rem] leading-3 ml-2 font-medium'>
                        <p>{type}</p>
                        <p>Adults: <span className='text-tertiary'>{adults}</span> Children: <span className='text-tertiary'>{children}</span></p>
                        <p className='text-gray-400'>{facilitiesList}</p>
                    </div>
                </div>
            </div>
            <div className='h-full flex flex-col justify-between'>
                <Rating rating={starRating}/>
                <div className='h-full flex flex-col justify-end items-end text-[0.7rem] leading-3 ml-2 font-medium'>
                        <h1 className='text-3xl font-semibold mr-3 mb-1'>€{pricePerNight}</h1>
                        {owner ? 
                        <Link to='/' className='flex items-center justify-center bg-primary p-2 rounded-xl hover:bg-tertiary duration-200'>
                            <p className='text-white font-bold text-lg'>Check</p>
                            <IoChevronForwardSharp className='text-white text-2xl'/> 
                        </Link>
                        :
                        <div className='flex items-center gap-x-4 '>
                            <CiTrash className='text-red-500 text-4xl p-1 cursor-pointer hover:bg-red-500 hover:text-white rounded-full duration-200' />
                            <Link to='/hotel-edit' className='flex items-center justify-center bg-primary p-2 rounded-xl hover:bg-tertiary duration-200 gap-x-2'>
                                <p className='text-white font-bold text-lg'>Edit</p>
                                <FaPencilAlt className='text-white text-lg'/>
                            </Link>

                        </div>}
                        
                </div>
            </div> 
        </div> 
    </div>
  )
}

export default HotelCard
