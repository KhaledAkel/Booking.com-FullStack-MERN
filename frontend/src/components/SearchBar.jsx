import { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="bg-white rounded-lg shadow-md w-[65vh] max-lg:w-full relative z-10 grid grid-cols-3 max-lg:gap-x-2">
            <div className="col-span-1 group p-4 border-[3px] border-transparent rounded-lg hover:border-primary cursor-pointer">
                <div className='text-xl max-lg:text-sm font-semibold flex items-center gap-x-3'>
                    <p>Location</p>
                    <IoIosArrowDown className='text-xl max-lg:text-sm text__color-primary'/>
                </div>
                <p className='text-[10px] font-light text-start '>Madrid</p>
            </div>
            <div className="col-span-1 group p-4 border-[3px] border-transparent rounded-lg hover:border-primary cursor-pointer">
                <div className='text-xl max-lg:text-sm font-semibold flex items-center gap-x-3'>
                    <p>Date</p>
                    <IoIosArrowDown className='text-xl max-lg:text-sm text__color-primary'/>
                </div>
                <p className='text-[10px] font-light text-start'>24 March, Fri</p>
            </div>
            <div className="col-span-1 group p-4 border-[3px] border-transparent rounded-lg hover:border-primary cursor-pointer">
                <div className='text-xl max-lg:text-sm font-semibold flex items-center gap-x-3'>
                    <p className=''>Price</p>
                    <IoIosArrowDown className='text-xl max-lg:text-sm text__color-primary'/>
                </div>
                <p className='text-[10px] font-light text-start'>€100-€200</p>
            </div>
    </div>
  )
}

export default SearchBar
