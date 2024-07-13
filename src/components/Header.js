

import React, { useState } from 'react';
import LogoEstio from '../assets/LogoEstio.png';
import { ImSearch } from "react-icons/im";
import { FaRegHeart, FaShoppingCart, FaUser, FaExchangeAlt } from 'react-icons/fa'; // Import FaExchangeAlt for compare icon
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Header = () => {

  const { currentUser } = useSelector(state => state.user);

  const [cartItems, setCartItems] = useState(3); // Example initial value

  return (
    <header className="w-full bg-primary bg-opacity-90 text-white p-4 shadow-md shadow-black " >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to={"/"}>
          <div>
            <img src={LogoEstio} alt="Estio" className="w-28 h-10" />
          </div>
        </Link>

        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-full overflow-hidden w-full max-w-md mx-4">
          <div className="p-2">
            <ImSearch className="text-gray-500" />
          </div>
          <input
            type="search"
            placeholder="Search Products"
            className="p-2 w-full text-gray-800 focus:outline-none"
          />
        </div>

        {/* Icons and Links */}
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <FaExchangeAlt />
            <span className="hidden md:inline">Compare</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaRegHeart />
            <span className="hidden md:inline">Wishlist</span>
          </div>
          <div className="flex items-center space-x-2 relative">
            <FaShoppingCart />
            <span className="hidden md:inline">Cart</span>
            {cartItems > 0 && (
              <span className="absolute top-[-1.3rem] right-[-0.8rem] md:top-[-1rem] md:right-5 rounded-full bg-red-600 text-white text-[11px] px-2 py-1">
                {cartItems}
              </span>
            )}
          </div>
          <Link to={"/profile"}>
            {currentUser ? (
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                <img src={currentUser.UserImage} alt="profile" className="w-full h-full object-cover" />
              </div>
            ) : (
                <div className="flex items-center space-x-2">
                  <FaUser />
                  <span className="hidden md:inline">Login</span>
                </div>
              )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;

