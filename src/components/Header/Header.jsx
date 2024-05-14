import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import "./Header.css"
import { FaRegHeart } from "react-icons/fa6";
import { UseGlobalContext } from '../../Data/DataProvider';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { Fav } = UseGlobalContext();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const NavItems = [
        { text: "Home", link: "/" },
        { text: "Search", link: "/Search" },
        { text: "Movies", link: "/Movies" },
        { text: "Series", link: "/Series" },
        { text: "Animated", link: "/Animated" },
    ]

    return (
        <>
            <header>
                <nav className="border-gray-200 px-md-5 px-3 py-md-0 py-4 bg-black">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <Link to={'/'} className="flex items-center ">
                            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> */}
                            <span className="self-center text-2xl font-semibold whitespace-nowrap secondary-color">FlimyVerse</span>
                        </Link>
                        <div className="flex items-center justify-end lg:order-2">
                            <Link to={`/favourite`} className='cart'>
                                <FaRegHeart size={22} className='text-white' />
                                <span>{Fav.length}</span>
                            </Link>
                            {/* <a href="#" className="text-gray-800 dark:text-white focus:ring-gray-300 font-medium rounded-lg text-base sm:block hidden mr-2 ">Log in /</a>
                            <a href="#" className="text-white bg-primary-700  font-medium rounded-lg  sm:block hidden text-base ">SingUp</a> */}
                            <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-expanded={isMenuOpen ? 'true' : 'false'}>
                                <span className="sr-only">Open main menu</span>
                                <svg className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                                <svg className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div className={`lg:flex justify-between items-center ${isMenuOpen ? 'block' : 'hidden'} ${isMenuOpen ? 'w-full' : ''}`} id="mobile-menu-2">
                            <ul className={`flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 `}>
                                {
                                    NavItems.map((CurItems) => {
                                        return (
                                            <li key={CurItems.text}>
                                                <NavLink activeclassname="active" to={CurItems.link} className="block py-2 pr-4 pl-3 text-white hover:text-red-600 bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">{CurItems.text}</NavLink>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
