

import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Signupform from '../assets/form.jpg';
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaEye, FaEyeSlash, FaTimes } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const validationSchema = Yup.object().shape({
        fullName: Yup.string().required('Full Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-700">
            {/* Background image of the signup form */}
            <div className='absolute w-full h-full'>
                <img src={Signupform} alt='form' className='object-cover w-full h-full' />
            </div>
            {/* Overlay to darken the background image */}
            <div className="absolute w-full h-full"></div>
            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-30">
                <div className="flex-1 p-6 md:p-12 bg-gray-800 bg-opacity-50 text-white">
                    <h1 className="text-3xl font-bold mb-4">Welcome to Logdy</h1>
                    <p className="mb-8">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.
                    </p>
                </div>
                <div className="flex-1 p-6 md:p-12 bg-white bg-opacity-30 text-black">
                    <h2 className="text-2xl font-bold mb-4">Create An Account</h2>
                    <Formik
                        initialValues={{ fullName: '', email: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            toast.success("Registration successful!");
                            setSubmitting(false);
                        }}
                        validateOnBlur={false}
                        validateOnChange={false}
                    >
                        {({ errors, touched, validateForm }) => (
                            <Form>
                                <div className="mb-4 flex items-center border rounded-md overflow-hidden">
                                    <span className="p-3 bg-gray-200"><FaUser /></span>
                                    <Field
                                        type="text"
                                        name="fullName"
                                        placeholder="Full Name"
                                        className="w-full p-3 focus:outline-none"
                                        required
                                    />
                                </div>

                                <div className="mb-4 flex items-center border rounded-md overflow-hidden">
                                    <span className="p-3 bg-gray-200"><FaEnvelope /></span>
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        className="w-full p-3 focus:outline-none"
                                        required
                                    />
                                </div>

                                <div className="mb-4 flex items-center border rounded-md overflow-hidden">
                                    <span className="p-3 bg-gray-200"><FaLock /></span>
                                    <Field
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Password"
                                        className="w-full p-3 focus:outline-none"
                                        required
                                    />
                                    <span className="p-3 cursor-pointer" onClick={togglePasswordVisibility}>
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>

                                <div className="mb-4">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" />
                                        <span className="ml-2">I agree to the terms of service</span>
                                    </label>
                                </div>
                                <button type="submit" className="w-full p-3 bg-red-500 text-white rounded-md">Register</button>
                            </Form>
                        )}
                    </Formik>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-t flex-grow mr-3"></span>
                        <span>Or Signup With</span>
                        <span className="border-t flex-grow ml-3"></span>
                    </div>
                    <div className="flex space-x-3 mt-4">
                        <button className="w-full p-3 bg-blue-600  text-white rounded-md flex items-center justify-center">
                            <FaGoogle className="mr-2" /> Google
                        </button>
                    </div>
                    <div className="mt-4 text-center">
                        <Link to={"/login"} className="text-blue-800 ">Already a member? Login here</Link>
                    </div>
                    <Link to="/" className="absolute top-2 right-2 text-gray-800 hover:text-black">
                        <FaTimes size={24} />
                    </Link>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Signup;
