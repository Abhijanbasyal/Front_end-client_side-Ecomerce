import React from 'react';
import { motion } from 'framer-motion';
import { FaInbox, FaClock, FaWallet, FaGift, FaShoppingBag, FaInfoCircle, FaSignOutAlt, FaMapMarkerAlt, FaCreditCard, FaBell, FaUsers, FaChevronDown, FaChevronUp, FaPlus } from 'react-icons/fa';

const ProfileSidebar = ({ sidebarOpen, isOpen, toggleDropdown, sidebarRef, user }) => {
    return (
        <div ref={sidebarRef} className={`shadow-inner shadow-black mt-0 md:mt-2 fixed inset-y-0 left-0 transform  ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 w-60 md:w-64 bg-gray-100 border-r overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100`}>
            <motion.div initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="bg-[#fefefe] pt-4 p-1 flex flex-col items-center  w-full border-r-2 border-black/20">
                <motion.img src={user.UserImage} alt="Profile" className="w-20 h-20 rounded-full mb-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                />
                <h3 className="text-lg font-semibold">{user.username}</h3>
                <p className="text-gray-600">38.00$</p>
            </motion.div>
            <nav className="mt-10 space-y-2">
                <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200">
                    <FaWallet className="mr-3" />
                    My wallet
                </a>
                <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200">
                    <FaGift className="mr-3" />
                    My Rewards
                </a>
                <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200">
                    <FaShoppingBag className="mr-3" />
                    My orders
                </a>
                <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200">
                    <FaInfoCircle className="mr-3" />
                    Personal Information
                </a>
                <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200">
                    <FaGift className="mr-3" />
                    Rewards
                </a>
                <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200">
                    <FaMapMarkerAlt className="mr-3" />
                    Addresses
                </a>
                <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200">
                    <FaCreditCard className="mr-3" />
                    Payment Methods
                </a>
                <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200">
                    <FaBell className="mr-3" />
                    Contact Preferences
                </a>
                <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200">
                    <FaUsers className="mr-3" />
                    Social networks
                </a>
                <button onClick={toggleDropdown} className="flex items-center p-2 text-gray-700 hover:bg-gray-200 w-full focus:outline-none">
                    <span className="flex-1 text-left">More</span>
                    {isOpen ? <FaChevronUp className="mr-3" /> : <FaChevronDown className="mr-3" />}
                </button>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                    >
                        <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200">
                            <FaGift className="mr-3" />
                            Important
                        </a>
                        <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200">
                            <FaUsers className="mr-3" />
                            Chats
                        </a>
                        <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200">
                            <FaClock className="mr-3" />
                            Scheduled
                        </a>
                        <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200">
                            <FaInbox className="mr-3" />
                            All Mail
                        </a>
                        <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200">
                            <FaPlus className="mr-3" />
                            Spam
                        </a>
                        <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200">
                            <FaInbox className="mr-3" />
                            Bin
                        </a>
                    </motion.div>
                )}
                <div className="mt-4 border-t">
                    <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200">
                        <FaPlus className="mr-3" />
                        Create new label
                    </a>
                </div>
                <div className="mt-4 pb-6 border-t">
                    <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200">
                        <FaSignOutAlt className="mr-3" />
                        Sign Out
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default ProfileSidebar;
