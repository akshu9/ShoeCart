import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiShoppingBag } from "react-icons/bi";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { toggletheme } from '../store/theme';
import '../App.css';

function Navbar({ query, setQuery }) {
    const cart = useSelector((state) => state.cart);
    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();

    const themehandle = () => {
        dispatch(toggletheme());
    };

    // useEffect(() => {
    //     document.body.className = theme;
    // }, [theme]);

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const total = cart.reduce((total, item) => total + item.quantity, 0);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className='bg-gray-100 w-full sticky top-0 z-10 shadow-xl'>
            <div className='container mx-auto flex items-center justify-between p-4'>
                <div className='flex items-center'>
                    <button onClick={toggleMobileMenu} className='lg:hidden'>
                        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                   
                </div>
                <ul className={`flex-col lg:flex-row lg:flex items-center lg:space-x-4 ${isMobileMenuOpen ? 'flex' : 'hidden'} lg:flex`}>
                <Link to='/' className='ml-1 text-xl font-bold'>Home</Link>
                    <Link to='/cart'>
                        <li className='m-4 text-xl font-bold'>Shop</li>
                    </Link>
                    <Link to="/cartItem" className='relative m-4'>
                        <BiShoppingBag size={24} />
                        {total > 0 && (
                            <sup className="absolute -top-2 -right-4 bg-red-500 text-white rounded-full px-2 text-xs">
                                {total}
                            </sup>
                        )}
                    </Link>
                    <input
                        id="search"
                        onChange={(e) => setQuery(e.target.value)}
                        className='m-4 border rounded border-black px-2'
                        placeholder='Search'
                    />
                    {/* <li onClick={themehandle} className='cursor-pointer m-4'>
                        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                    </li> */}
                    <FaUserCircle className='m-4' size={24} />
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
