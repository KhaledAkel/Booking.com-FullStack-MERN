import React from 'react'
import { SearchBar } from '../components'
import { SearchSideBar, SearchContent } from '../containers'

function SearchContainer() {
  return (
    <div className='w-full section-container'>
        <div className='w-full flex items-center justify-center my-16 relative '>
            <SearchBar />
        </div>
        <div className='w-full flex gap-x-6'>
            <SearchSideBar />
            <SearchContent />
        </div>
    </div>
  )
}

export default SearchContainer
