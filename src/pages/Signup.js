


import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Signupform from '../assets/form.jpg';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaTimes } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import APIEndPoints from '../common/APIEndPoints';
import GoogleSign from '../components/GoogleSign';
import { IoMdAlert } from "react-icons/io";
import { motion } from "framer-motion";
import SignupRules from '../components/SignupRules';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const initialValues = {
        username: '',
        email: '',
        password: '',
        terms: false
    };

    const onSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await axios.post(APIEndPoints.sign_up.url, values);
            const dataResponse = response.data;
            console.log(dataResponse);
            if (dataResponse.success === false) {
                toast.error(dataResponse.message);
            } else {
                toast.success(dataResponse.message);
                navigate("/login");
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
                console.log(error.response.data.message)
            } else {
                toast.error("An error occurred. Please try again.");
            }
        } finally {
            setSubmitting(false);
        }
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required('Username is required')
            .min(4, 'Username is too short')
            .max(15, 'Username is too long'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required')
            .matches(
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                'Invalid email address'
            ),
        password: Yup.string()
            .required('Password is required')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                'Invalid format, please follow the rules'
            ),
        terms: Yup.boolean()
            .oneOf([true], 'You must accept the terms of service')
    });

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-700">
            <div className='absolute w-full h-full'>
                <img src={Signupform} alt='form' className='object-cover w-full h-full' />
            </div>
            <div className="absolute w-full h-full bg-black  opacity-80 "></div>
            <div className="relative z-10 flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-30">

                <SignupRules />
                <div className="flex-1 p-6 md:p-12 bg-white bg-opacity-30 text-black">
                    <h2 className="text-2xl font-bold mb-4">Create An Account</h2>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                        validateOnBlur={false}
                        validateOnChange={false}
                    >
                        {({ isSubmitting, errors, touched }) => (
                            <Form>
                                <div className="mt-10 mb-8 flex items-center border rounded-md overflow-hidden">
                                    <span className="p-3 bg-gray-200"><FaUser /></span>
                                    <Field
                                        type="text"
                                        name="username"
                                        placeholder="Username"
                                        className="w-full p-3 focus:outline-none"
                                        required
                                    />
                                    {errors.username && touched.username ? (
                                        <motion.div
                                            className="absolute bg-white/90 ml-10 rounded font-bold text-center px-2 mt-16 flex items-center space-x-2"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className='text-red-500'>
                                                <IoMdAlert />
                                            </div>
                                            <div className='text-red-600'>
                                                {errors.username}
                                            </div>
                                        </motion.div>
                                    ) : null}
                                </div>

                                <div className="mb-8 flex items-center border rounded-md overflow-hidden">
                                    <span className="p-3 bg-gray-200"><FaEnvelope /></span>
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        className="w-full p-3 focus:outline-none"
                                        required
                                    />
                                    {errors.email && touched.email ? (
                                        <motion.div
                                            className="absolute bg-white/90 ml-10 rounded font-bold text-center px-2 mt-16 flex items-center space-x-2"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className='text-red-500'>
                                                <IoMdAlert />
                                            </div>
                                            <div className='text-red-600'>
                                                {errors.email}
                                            </div>
                                        </motion.div>
                                    ) : null}
                                </div>

                                <div className="mb-8 flex items-center border rounded-md overflow-hidden">
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
                                    {errors.password && touched.password ? (
                                        <motion.div
                                            className="absolute bg-white/90 ml-10 rounded font-bold text-center px-2 mt-16 flex items-center space-x-2"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className='text-red-500'>
                                                <IoMdAlert />
                                            </div>
                                            <div className='text-red-600'>
                                                {errors.password}
                                            </div>
                                        </motion.div>
                                    ) : null}
                                </div>

                                <div className="mb-4">
                                    <label className="inline-flex items-center">
                                        <Field type="checkbox" name="terms" className="form-checkbox" />
                                        <span className="ml-2">I agree to the terms of service</span>
                                    </label>
                                    {errors.terms && touched.terms ? (
                                        <motion.div
                                            className="absolute text-red-900 rounded font-bold text-center px-2 pt-1"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {errors.terms}
                                        </motion.div>
                                    ) : null}
                                </div>
                                <button type="submit" disabled={isSubmitting} className="mt-5 hover:bg-red-800 w-full p-3 bg-red-500 text-white rounded-md">
                                    {isSubmitting ? 'Loading...' : 'Sign Up'}
                                </button>
                            </Form>
                        )}
                    </Formik>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-t flex-grow mr-3"></span>
                        <span>Or Signup With</span>
                        <span className="border-t flex-grow ml-3"></span>
                    </div>
                    <GoogleSign />
                    <div className="mt-4 text-center">
                        <Link to={"/login"} className="text-blue-800">Already a member? Login here</Link>
                    </div>
                    <Link to="/" className="absolute top-1 right-2 text-white   hover:text-black">
                        <div className='bg-red-900'>
                            <FaTimes size={24} />

                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;








