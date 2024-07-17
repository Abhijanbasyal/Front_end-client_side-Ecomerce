
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import { Formik, Form, Field } from 'formik';
import { CountryDropdown } from 'react-country-region-selector';
import ProfileSidebar from '../components/ProfileSidebar';
import { useSelector } from 'react-redux';
import { IoIosMale } from "react-icons/io";
import { IoFemaleOutline } from "react-icons/io5";

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);
    const { currentUser } = useSelector((state) => state.user);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setSidebarOpen(false);
        }
    };

    useEffect(() => {
        if (sidebarOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [sidebarOpen]);

    const initialValues = {
        username: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phone: '',
        dateOfBirth: '',
        country: '',
        gender: ''
    };

    return (
        <div className="flex flex-col md:flex-row h-[80rem] md:h-[52rem] ">
            {/* Sidebar Toggle Button for Small Screens */}
            <div className="md:hidden flex justify-between items-center p-4 bg-gray-100 border-b">
                <button onClick={toggleSidebar} className="text-gray-700">
                    <FaBars size={24} />
                </button>
                <h3 className="text-lg font-semibold">Profile</h3>
            </div>

            {/* Sidebar */}
            <ProfileSidebar
                sidebarOpen={sidebarOpen}
                isOpen={isOpen}
                toggleDropdown={toggleDropdown}
                sidebarRef={sidebarRef}
                user={currentUser}
            />

            {/* Main Content */}
            <div className="flex-1 p-4 md:p-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-6 rounded-lg shadow-lg shadow-black/50 "
                >
                    <h3 className="text-4xl md:text-5xl font-bold mb-14">Personal Information</h3>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {({ values, handleChange, setFieldValue }) => (
                            <Form>
                                <div className="grid grid-cols-1 gap-6 mb-12 md:mb-6 md:grid-cols-2">
                                    <div className="p-2">
                                        <label className="block text-2xl font-bold text-gray-700 pb-2">First Name</label>
                                        <Field type="text" name="firstName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Denis" />
                                    </div>
                                    <div className="p-2">
                                        <label className="block text-2xl font-bold text-gray-700 pb-2">Last Name</label>
                                        <Field type="text" name="lastName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Holland" />
                                    </div>
                                    <div className="p-2">
                                        <label className="block text-2xl font-bold text-gray-700 pb-2">Email</label>
                                        <Field type="email" name="email" className="text-black font-bold mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder={currentUser.email} disabled />
                                    </div>
                                    <div className="p-2">
                                        <label className="block text-2xl font-bold text-gray-700 pb-2">Phone</label>
                                        <Field type="text" name="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="+1 234 567 890" />
                                    </div>
                                    <div className="p-2">
                                        <label className="block text-2xl font-bold text-gray-700 pb-2">Date of Birth</label>
                                        <Field type="date" name="dateOfBirth" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
                                    </div>
                                    <div className="p-2">
                                        <label className="block text-2xl font-bold text-gray-700 pb-2">Country</label>
                                        <CountryDropdown
                                            value={values.country}
                                            onChange={(val) => setFieldValue('country', val)}
                                            classes="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
                                        />
                                    </div>
                                    <div className="p-2">
                                        <label className="block text-2xl font-bold text-gray-700 pb-2">Gender</label>
                                        <div className="flex items-center mt-1">
                                            <label className="inline-flex items-center">
                                                <Field type="radio" name="gender" value="male" className="hidden" />
                                                <div className={`w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center border-2 rounded-md cursor-pointer ${values.gender === 'male' ? 'bg-blue-500 text-white' : 'border-gray-300'}`}>
                                                    <IoIosMale className='text-2xl md:text-4xl'/>
                                                    <span className="mt-2 text-lg font-bold">Male</span>
                                                </div>
                                            </label>
                                            <label className="inline-flex items-center ml-6">
                                                <Field type="radio" name="gender" value="female" className="hidden" />
                                                <div className={`w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center border-2 rounded-md cursor-pointer ${values.gender === 'female' ? 'bg-blue-500 text-white' : 'border-gray-300'}`}>
                                                    <IoFemaleOutline  className='text-2xl md:text-4xl' />
                                                    <span className="mt-2 text-lg font-bold">Female</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex  justify-center md:justify-end  ">
                                    <button type="submit" className="bg-[#28a2ed] text-white px-4 py-2 rounded-md">Save</button>
                                    <button type="button" className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Cancel</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </motion.div>
            </div>
        </div>
    );
}

export default Profile;
