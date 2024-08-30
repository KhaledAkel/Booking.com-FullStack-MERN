import React from 'react'
import { HotelCard } from '../components'
import { useHotelsContext } from '../context'

function SearchContent() {
    const { searchedHotels } = useHotelsContext()
  return (
    <div className='w-[70%] max-lg:w-full flex flex-col gap-y-4'>
        {searchedHotels.length > 0 ? (
            searchedHotels.map(hotel => (
                <HotelCard 
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
                    owner={true}
                />
            ))
        ) : (
            <div>No hotels available</div>
        )}

    </div>
  )
}

export default SearchContent
