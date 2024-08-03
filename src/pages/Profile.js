

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import { Formik, Form, Field } from 'formik';
import { CountryDropdown } from 'react-country-region-selector';
import ProfileSidebar from '../components/ProfileSidebar';
import { useSelector } from 'react-redux';
import { IoIosMale } from "react-icons/io";
import { IoFemaleOutline } from "react-icons/io5";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from 'react-hot-toast';
import { IoHourglassOutline } from "react-icons/io5";
import { app } from "../firebase";
import {
    userUpdateStart,
    userUpdateSuccess,
    userUpdateFailure
} from '../redux/Users/userSlice';

import { useDispatch } from 'react-redux';
import APIEndPoints from '../common/APIEndPoints';
import axios from 'axios';

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [filePerc, setFilePerc] = useState(0);
    const [fileUploadError, setFileUploadError] = useState(false);
    const sidebarRef = useRef(null);
    const { currentUser } = useSelector((state) => state.user);
    const [formData, setFormData] = useState({ ...currentUser });
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const dispatch = useDispatch();

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

    useEffect(() => {
        if (file) {
            handleFileUpload(file);
        }
    }, [file]);

    const initialValues = {
        email: currentUser.email || '',
        password: '',
        firstName: '',
        lastName: '',
        phone: '',
        dateOfBirth: '',
        country: '',
        gender: ''
    };

    const handleFileUpload = (file) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setFilePerc(Math.round(progress));
            },
            (error) => {
                setFileUploadError(true);
                toast.error("Image upload failed!");
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setFormData((prevData) => ({ ...prevData, avatar: downloadURL }));
                    setFileUploadError(false); // Reset error state on successful upload
                    toast.success("Image successfully uploaded!");
                });
            }
        );
    };

    const handleProfileImageChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            if (selectedFile.size > 2 * 1024 * 1024) { // Check if the file size exceeds 2MB
                setFileUploadError(true);
                toast.error("Image must be less than 2 MB");
            } else {
                setFileUploadError(false); // Reset error state if file is valid
                setFile(selectedFile);
            }
        }
    };

    const onSubmit = async (values, { setSubmitting }) => {
        try {
            dispatch(userUpdateStart());


            const res = await axios.post(APIEndPoints.user_update.url.replace(':id', currentUser._id), formData)

            const data = res.data;

            if (data.success === false) {
                dispatch(userUpdateFailure(data.message));
                toast.error(data.message);
                return;
            }

            dispatch(userUpdateSuccess(data));
            setUpdateSuccess(true);
            toast.success(data.message);






        } catch (error) {
            dispatch(userUpdateFailure(error.message));
            toast.error(error.message);
        }

    }



    return (
        <div className="flex flex-col md:flex-row h-[80rem] md:h-[55rem]">
            {/* Sidebar Toggle Button for Small Screens */}
            <div className="md:hidden flex justify-between items-center p-4 bg-gray-100 border-b">
                <button onClick={toggleSidebar} className="text-gray-700">
                    <FaBars size={24} />
                </button>
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
                    className="bg-white p-6 rounded-lg shadow-lg shadow-black/50"
                >
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
                        <div className="flex flex-col sm:flex-row justify-start items-center space-x-0 sm:space-x-4 text-2xl sm:text-4xl md:text-5xl font-bold">
                            <label className="cursor-pointer relative">
                                <img src={formData.avatar || currentUser.UserImage} alt='user' className='w-16 h-16 md:w-24 md:h-24 rounded-full object-cover' />
                                <input type="file" className="hidden" onChange={handleProfileImageChange} accept='image/*' />
                                {file && filePerc < 100 && (
                                    <IoHourglassOutline className="absolute top-0 right-0 w-6 h-6 text-blue-500 animate-spin" />
                                )}
                            </label>
                            <div className="text-center sm:text-left mt-4 sm:mt-0">

                                <h3>Personal Information</h3>

                            </div>
                        </div>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                    >
                        {({ values, handleChange, setFieldValue, isSubmitting }) => (
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
                                                    <IoIosMale className='text-2xl md:text-4xl' />
                                                    <span className="mt-2 text-lg font-bold">Male</span>
                                                </div>
                                            </label>
                                            <label className="inline-flex items-center ml-4">
                                                <Field type="radio" name="gender" value="female" className="hidden" />
                                                <div className={`w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center border-2 rounded-md cursor-pointer ${values.gender === 'female' ? 'bg-pink-500 text-white' : 'border-gray-300'}`}>
                                                    <IoFemaleOutline className='text-2xl md:text-4xl' />
                                                    <span className="mt-2 text-lg font-bold">Female</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {fileUploadError && (
                                    <div className="text-red-500 text-center mb-4">
                                        There was an error uploading the image. Please try again.
                                    </div>
                                )}
                                <div className="text-center">
                                    <button type="submit" className="px-6 py-2 hover:bg-blue-800 bg-blue-500 text-white rounded-md text-xl font-bold shadow-lg shadow-black/50">Save Changes</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </motion.div>
            </div>
        </div>
    );
};

export default Profile;

