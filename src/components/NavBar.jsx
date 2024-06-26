import React from 'react'
import NavbarItem from './NavbarItem'

export default function NavBar() {
  return (
    <div className='flex dark:bg-gray-600 bg-amber-200 lg:text-lg justify-center gap-6'>
      <NavbarItem title='Trending' param='fetchTrending'/>
      <NavbarItem title='Top Rated ' param='fetchTopRated'/>
    </div>
  )
}
