import React from 'react'
import { Navbar, SearchContainer } from '../containers'


function Search() {
  return (
    <div className='w-full bg__color-secondary mt-2 '>
        <Navbar />
        <SearchContainer />
        <div className='w-full h-[170px]' />
    </div>
  )
}

export default Search
