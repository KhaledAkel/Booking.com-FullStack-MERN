import React, { useEffect } from 'react';
import { HotelCard } from '../components';
import { useHotelsContext } from '../context';

function MyHotelsContainer() {
    const { myHotels, refreshMyHotels } = useHotelsContext();

    useEffect(() => {
        refreshMyHotels(); // Fetch or refresh the hotels when this component is mounted
    }, [refreshMyHotels]);

    return (
        <div className='w-full flex flex-col gap-y-6 section-container'>
            {myHotels.length > 0 ? (
                myHotels.map(hotel => (
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
                    />
                ))
            ) : (
                <div>No hotels available</div>
            )}
        </div>
    );
}

export default MyHotelsContainer;
