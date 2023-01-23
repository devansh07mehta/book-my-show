import React from 'react';
import { BiMenu, BiSearch, BiChevronDown } from 'react-icons/bi';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";

const navigation = [
    { name: 'Plays', Link: "/plays", current: true, },
    { name: 'Delhi NCR', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function NavSm() {
    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                    <div className='text-white flex items-center justify-between'>


                        <div className='w-8 h-8 flex items-center'>
                            <Link to="/book-my-show">
                                <img src={process.env.PUBLIC_URL + '/img/book-my-show-logo.png'} alt="logo"
                                    className='w-full h-full' />
                            </Link>
                            {/* <BiSearch className='w-full h-full' /> */}
                        </div>

                        <div className='w-10 h-10 text-white flex items-center'>
                            {/* Mobile menu button*/}
                            <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <XMarkIcon className="block h-6 w-6 text-gray-300 hover:text-white" aria-hidden="true" />
                                ) : (
                                    <Bars3Icon className='w-full h-full block text-gray-300 hover:text-white' aria-hidden="true" />
                                )}
                            </Disclosure.Button>
                        </div>


                    </div>
                    <Disclosure.Panel className="sm:hidden">

                        <div className="flex space-x-4 mt-2">
                            <div className='w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md'>
                                <BiSearch />
                                <input type="search" className='w-full bg-transparent border-none focus:outline-none text-ellipsis' placeholder='Search for movies, events, plays, sports and activities' />
                            </div>
                        </div>

                        <div className='bg-gray-900 text-white mt-1'>
                            <Link
                                current={true}
                                to="/plays"
                                className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white"
                            >
                                Plays
                            </Link>
                        </div>

                        <span className="text-gray-300 text-base flex items-center cursor-pointer hover:text-white">
                            Delhi NCR <BiChevronDown />
                        </span>

                    </Disclosure.Panel>

                </>
            )
            }
        </Disclosure >

    ) //<></> => Fragments
}

function NavMd() {
    return (
        <Disclosure as="nav" className="w-full">
            {({ open }) => (<>
                <div className='w-full flex'>
                    <div className='w-10 h-10 mx-2'>
                        <Link to="/book-my-show">
                            <img src={process.env.PUBLIC_URL + '/img/book-my-show-logo.png'} alt="logo"
                                className='w-full h-full' />
                        </Link>
                    </div>
                    <div className='w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md'>
                        <BiSearch />
                        <input type="search" className='w-full bg-transparent border-none focus:outline-none text-ellipsis' placeholder='Search for movies, events, plays, sports and activities' />
                    </div>
                    <div className='mx-2 w-10 h-10 text-white flex items-center'>
                        {/* Mobile menu button*/}
                        <Disclosure.Button className="rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                                <XMarkIcon className=" h-6 w-6 text-gray-300 hover:text-white" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className='h-6 w-6 text-gray-300 hover:text-white' aria-hidden="true" />
                            )}
                        </Disclosure.Button>
                    </div>
                </div>

                <Disclosure.Panel>
                    <div className='w-full flex flex-col px-12'>


                        <div className='bg-gray-900 text-white mt-1'>
                            <Link
                                current={true}
                                to="/plays"
                                className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white"
                            >
                                Plays
                            </Link>
                        </div>

                        <span className="text-gray-300 text-base flex items-center cursor-pointer hover:text-white">
                            Delhi NCR <BiChevronDown />
                        </span>
                    </div>


                </Disclosure.Panel>
            </>
            )
            }
        </Disclosure >
    )
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
                    className="bg-red-600 text-white text-lg px-2 py-1 rounded"
                >
                    Plays
                </Link>
                {/* <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
                    Sign In
                </button> */}
                {/* <div className="w-8 h-8 text-white">
                    <BiMenu className="w-full h-full" />
                </div> */}
            </div>
        </div>
    </>
}
// Main Component
const Navbar = () => {
    return (
        <nav className='bg-darkBackground-700 px-4 py-3'>
            {/* This is for mobile screen - Navbar */}
            <div className='sm:hidden'>
                <NavSm />
            </div>

            {/* This is for Medium/Tab Screen - Navbar */}
            <div className='hidden sm:flex lg:hidden'>
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