import React from 'react'
import Input from './Input'

function AdressForm() {
  return (
    <div className='w-1/2 flex flex-col gap-y-3'>
      <Input 
      label='Name' type='text' placeholder='Enter the name of your proberty'
      name='name'/>
      <div className='w-full flex items-center gap-x-3'>
        <Input 
          label='Adress' type='text' placeholder='Enter the Adress of your proberty'
          name='adress' width='100%' />
        <div className='w-[30%] text-sm 3' >
          <label htmlFor="type">Select the type</label>
          <select name="type" id="type" className='border-black border rounded-lg p-1'>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="hotel">Hotel</option>
          </select>
        </div>
      </div>
      <Input 
      label='Description' type='text' placeholder=''
      name='description' height='200px'/>
      <div className='flex gap-x-4'>
        <div className='text-sm 3 flex flex-col' >
            <label htmlFor="facilities">Facilities</label>
            <select name="facilities" id="facilities" className='border-black border rounded-lg p-1' multiple>
              <option value="Pool">Pool</option>
              <option value="Garden">Garden</option>
              <option value="Balcony">Balcony</option>
              <option value="GYM">GYM</option>
            </select>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="adults"> Adults </label>
          <input type="number" id="adults" name="adults" min="1" max="5" className='border border-black' />
          <label htmlFor="children"> Children </label>
          <input type="number" id="children" name="children" min="1" max="5" className='border border-black' />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="price"> prices </label>
          <input type="number" id="price" name="pricePerNight" min="1" max="5" className='border border-black' />
          <label htmlFor="stars"> stars </label>
          <input type="number" id="stars" name="starRating" min="1" max="5" className='border border-black' />
        </div>

      </div>
    </div>
  )
}

export default AdressForm
