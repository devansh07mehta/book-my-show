import React from 'react';
import { BiMenu, BiSearch, BiChevronDown } from 'react-icons/bi';
import { Link } from "react-router-dom";

function NavSm() {
    return <>
        <div className='text-white flex items-center justify-between'>
            {/* <div>
                <h3 className='text-xl font-bold'>It All Starts Here!!</h3>
                <span className='text-gray-400 text-xs flex items-center cursor-pointer hover:text-white'>
                    Delhi NCR <BiChevronDown />
                </span>
            </div> */}

            <div className='w-8 h-8 flex items-center'>
                <BiSearch className='w-full h-full' />
            </div>

            <div className='w-10 h-10 text-white flex items-center'>
                <BiMenu className='w-full h-full' />
            </div>


        </div>
    </>  //<></> => Fragments
}

function NavMd() {
    return <>
        <div className='w-10 h-10 mx-2'>
            <img src={process.env.PUBLIC_URL + '/img/book-my-show-logo.png'} alt="logo"
                className='w-full h-full' />
        </div>
        <div className='w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md'>
            <BiSearch />
            <input type="search" className='w-full bg-transparent border-none focus:outline-none' />
        </div>
        <div className='mx-2 w-10 h-10 text-white flex items-center'>
            <BiMenu className='w-full h-full' />
        </div>
    </>
}

function NavLg() {
    return <>
        <div className='container flex mx-2 items-center gap-3 px-4 justify-between'>
            <div className='flex items-center w-1/2 gap-3'>
                <div className='w-10 h-10'>
                    <Link to="/book-my-show">
                        <img src={process.env.PUBLIC_URL + '/img/book-my-show-logo.png'} alt="logo" className='w-full h-full' />
                    </Link>
                </div>
                <div className='w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md'>
                    <BiSearch />
                    <input type="search" className='w-full bg-transparent border-none focus:outline-none' placeholder='Search for movies, events, plays, sports and activities' />
                </div>
            </div>

            <div className="flex items-center gap-3">
                <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
                    Delhi NCR <BiChevronDown />
                </span>
                <Link
                    to="/plays"
                    className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white"
                >
                    Plays
                </Link>
                <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
                    Sign In
                </button>
                <div className="w-8 h-8 text-white">
                    <BiMenu className="w-full h-full" />
                </div>
            </div>
        </div>
    </>
}
// Main Component
const Navbar = () => {
    return (
        <nav className='bg-darkBackground-700 px-4 py-3'>
            {/* This is for mobile screen - Navbar */}
            <div className='md:hidden'>
                <NavSm />
            </div>

            {/* This is for Medium/Tab Screen - Navbar */}
            <div className='hidden md:flex lg:hidden'>
                <NavMd />
            </div>

            {/* This is for Large Screen like Desktop - Navbar */}
            <div className='hidden lg:flex'>
                <NavLg />
            </div>
        </nav>
    );
}

export default Navbar;