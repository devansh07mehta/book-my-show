import React, { useContext } from 'react'
import { BiChevronDown, BiMenu, BiSearch, BiShareAlt } from 'react-icons/bi';
import { MovieContext } from '../../context/Movie.context';

const NavSm = () => {
  const { movie } = useContext(MovieContext);
  return (
    <>
      <div className='text-gray-700 flex items-center justify-between'>
        <div>
          <h3 className='text-xl font-bold'>{movie.original_title}</h3>
        </div>
        <div className='w-8 h-8'>
          <BiShareAlt className='w-full h-full' />
        </div>
      </div>
    </>
  )
}

const NavLg = () => {
  return <>
    <div className='container flex mx-16 px-4 items-center justify-between'>
      <div className='flex items-center w-1/2 gap-3'>
        <div className='w-10 h-10'>
          <img src={process.env.PUBLIC_URL + '/img/book-my-show-logo.png'} alt="logo" className='w-full h-full' />
        </div>

        <div className='w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md'>
          <BiSearch />
          <input type="search" className='w-full bg-transparent border-none focus:outline-none'
            placeholder='Search for movies, events, plays, sports and activities' />
        </div>
      </div>

      <div className='flex items-center gap-3'>
        <span className='text-gray-200 text-base flex items-center cursor-pointer hover:text-white'>
          Mumbai, MAH <BiChevronDown />
        </span>
        <button className='bg-red-600 text-white px-2 py-1 text-sm rounded'>Sign In</button>
        <div className='w-8 h-8 text-white'>
          <BiMenu className='w-full h-full' />
        </div>
      </div>
    </div>
  </>
}

const MovieNavbar = () => {

  return <>
    <nav className='bg-white border-b-2 md:border-b-0 md:bg-darkBackground-700 p-4'>
      <div className='md:hidden'>
        {/* Mobile and Medium Screen Size */}
        <NavSm />
      </div>
      <div className='hidden w-full md:flex'>
        {/* Large Screen Size  */}
        <NavLg />
      </div>
    </nav>
  </>;
}
export default MovieNavbar;