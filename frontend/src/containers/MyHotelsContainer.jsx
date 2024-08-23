import React, { useEffect, useState } from 'react';
import { HotelCard } from '../components';
import { useHotelsContext } from '../context';

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

function MyHotelsContainer() {
    const { hotels, dispatch } = useHotelsContext();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadHotels = async () => {
            try {
                const response = await fetch(`${VITE_API_BASE_URL}/api/my-hotels/view`, {
                    method: "GET",
                    credentials: 'include',
                });

                if (response.ok) {
                    const hotelsData = await response.json(); 
                    dispatch({ type: 'SET_HOTELS', payload: hotelsData });
                } else if (response.status === 404) {
                    setError('Hotels not found');
                } else {
                    setError('Failed to fetch hotels');
                }
            } catch (err) {
                setError('Error fetching hotels');
            } finally {
                setLoading(false);
            }
        };

        loadHotels();
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className='w-full flex flex-col gap-y-6 section-container'>
            {hotels.length > 0 ? (
                hotels.map(hotel => (
                    <HotelCard 
                        key={hotel._id}
                        image={hotel.images[0]} 
                        name={hotel.name} 
                        address={hotel.address || hotel.adress} // Temporary fix for typo
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
