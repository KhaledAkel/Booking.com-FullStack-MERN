import React from 'react'
import { useHotelsContext } from '../context'
import { Link } from 'react-router-dom'
import { Card } from '../components'

function SetSection({ title, id, special }) {
  let { hotels } = useHotelsContext()
  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}
  hotels = shuffleArray(hotels)

  return (
    <div className='w-full cursor-pointer' id={id}>
      <div className=' w-[90%] max-lg:w-[95%] max-lg:ml-[5%]  ml-[10%] flex flex-col '>
        <div className='flex items-center justify-between mb-5 pr-9'>
          <h1 className='text-2xl font-bold text-tertiary'>{title}</h1>
          <Link to={`/hotels/${id}`} className='text-sm text-primary hover:text-tertiary'>View all</Link>
        </div>
        <div className='w-full custom-scrollbar overflow-x-scroll overflow-y-clip over whitespace-nowrap h-[400px]'>
          {hotels.map(hotel => (
            <Card 
              key={hotel._id}
              id={hotel._id}
              image={hotel.images[0]} 
              name={hotel.name} 
              country = {hotel.country}
              city = {hotel.city}
              description={hotel.description}
              type={hotel.type}
              adults={hotel.adults}
              children={hotel.children}
              facilities={hotel.facilities}
              pricePerNight={hotel.pricePerNight}
              starRating={hotel.starRating}
              specialOffer={special}
            />
          ))}
        </div>

      </div>
    </div>

  )
}

export default SetSection