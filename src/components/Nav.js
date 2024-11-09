import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../hooks/useOnlineStatus';

const Nav = () => {
  const cardItem = useSelector((store) => store.card.items);
  const isOnline = useOnlineStatus();

  return (
    <nav className="w-full bg-indigo-600 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <a href="/">StoreLogo</a>
        </div>

        {/* Search Bar (Hidden on small screens) */}
        <div className="hidden lg:flex items-center relative mx-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-[300px] md:w-[400px] lg:w-[450px] pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="absolute right-3 bg-indigo-500 p-2 rounded-full text-white hover:bg-indigo-600 focus:outline-none">
            <FiSearch size={20} />
          </button>
        </div>

        {/* Online Status, Login, and Cart */}
        <div className="flex items-center space-x-4">
          {/* Online Status Indicator (Visible on all screens) */}
          <div className="flex items-center">
            <span
              className={`w-3 h-3 rounded-full mr-2 ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}
            ></span>
            <span className="text-white text-sm">{isOnline ? 'Online' : 'Offline'}</span>
          </div>

          {/* Login Button (Visible on all screens) */}
          <button className="text-white font-semibold hover:text-black">
            Login
          </button>

          {/* Cart Icon */}
          <Link to="/CardItems">
            <button className="relative">
              <FaShoppingCart size={24} className="text-white hover:text-gray-200" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cardItem.length}
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* Responsive Search Bar (Visible only on small screens) */}
      <div className="lg:hidden px-4 py-2">
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="absolute right-3 bg-indigo-500 p-2 rounded-full text-white hover:bg-indigo-600 focus:outline-none">
            <FiSearch size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
