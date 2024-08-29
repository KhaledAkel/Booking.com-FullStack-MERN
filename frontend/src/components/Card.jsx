import React from 'react';

function Card({ id, name, image, pricePerNight, country, city, specialOffer }) {
  return (
    <div className='relative w-[250px] h-[400px] inline-block rounded-2xl mr-3 '>
      <img src={image} alt="" className='absolute w-full h-full object-cover rounded-2xl' />
      <div className='w-full z-10 absolute  h-[100px] bottom-0 flex items-end p-3 justify-between'>
        <div className='flex justify-start items-start flex-col'>
          <h1 className='text-sm font-bold text-white'> {name} </h1>
          <p className='text-[10px] text-white'>{`${country} : ${city}`}</p>
        </div>
        <div className='flex justify-end items-end flex-col'>
          {specialOffer && <p className='text-[15px] font-bold text-red-600'>50% Off</p>}
          <p className='text-sm font-bold text-white'>${pricePerNight}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;
