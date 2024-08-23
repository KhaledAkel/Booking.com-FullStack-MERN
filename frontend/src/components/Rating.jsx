import React from 'react'

function Rating(props) {
    const { rating } = props
  return (
    <div className='flex items-center justify-end'> 
        <div className='flex items-center justify-end font-bold mr-2'>Good</div>
        <div className='bg-primary text-white flex items-center justify-center rounded-xl font-bold p-2'>{rating}</div>
    </div>
  )
}

export default Rating
