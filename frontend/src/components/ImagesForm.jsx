import React from 'react'

function ImagesForm() {
  return (
    <div className='w-1/2 relative rounded-xl'>
        <img src="https://i.pinimg.com/originals/74/f9/63/74f96335eb27eac65bfad8f7bf96caa0.gif" 
        className='w-full h-full object-cover absolute overflow-hidden rounded-xl' />
        <input type="file" name="images" id="images" className='absolute cursor-pointer bottom-0 left-1/2  -translate-x-1/4' multiple placeholder='Upload images'/>
    </div>
  )
}

export default ImagesForm
