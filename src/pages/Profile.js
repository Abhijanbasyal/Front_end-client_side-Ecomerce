import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInbox, FaClock, FaWallet, FaGift, FaShoppingBag, FaInfoCircle, FaSignOutAlt, FaMapMarkerAlt, FaCreditCard, FaBell, FaUsers, FaChevronDown, FaChevronUp, FaPlus, FaBars } from 'react-icons/fa';

const Profile = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Sidebar Toggle Button for Small Screens */}
            <div className="md:hidden flex justify-between items-center p-4 bg-gray-100 border-b">
                <button onClick={toggleSidebar} className="text-gray-700">
                    <FaBars size={24} />
                </button>
                <h3 className="text-lg font-semibold">Profile</h3>
            </div>

            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-64 bg-gray-100 border-r overflow-y-auto`}>
                <div className="p-4 flex flex-col items-center">
                    <img src="https://via.placeholder.com/150" alt="Profile" className="w-20 h-20 rounded-full mb-2" />
                    <h3 className="text-lg font-semibold">Denis Holland</h3>
                    <p className="text-gray-600">38.00$</p>
                </div>
                <nav className="mt-2 space-y-2">
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
                        <div>
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
                        </div>
                    )}
                    <div className="mt-4 border-t">
                        <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200">
                            <FaPlus className="mr-3" />
                            Create new label
                        </a>
                    </div>
                    <div className="mt-4 border-t">
                        <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200">
                            <FaSignOutAlt className="mr-3" />
                            Sign Out
                        </a>
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4 md:p-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-6 rounded-lg shadow-md"
                >
                    <h3 className="text-2xl font-semibold mb-4">Personal Information</h3>
                    <form>
                        <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">First Name</label>
                                <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Denis" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Holland" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="denis.holland@company.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone</label>
                                <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="+1 234 567 890" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                                <input type="date" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
                            </div>
                            <div className="flex items-center">
                                <label className="block text-sm font-medium text-gray-700 mr-4">Gender</label>
                                <div className="flex items-center">
                                    <input type="radio" name="gender" value="male" className="mr-2" />
                                    <label className="mr-4">Male</label>
                                    <input type="radio" name="gender" value="female" className="mr-2" />
                                    <label>Female</label>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md">Save</button>
                            <button type="button" className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Cancel</button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}

export default Profile;
