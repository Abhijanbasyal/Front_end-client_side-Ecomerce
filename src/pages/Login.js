import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { motion } from "framer-motion";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import SignupRules from '../components/SignupRules';
import {toast} from "react-hot-toast";

//importing icons
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaTimes } from 'react-icons/fa';
import { IoMdAlert } from "react-icons/io";

import APIEndPoints from '../common/APIEndPoints';

//import bgimage for login page
import Loginform from '../assets/form.jpg';

//importing slice and redux 
import { useDispatch, useSelector } from 'react-redux';
import {
    signInStart,
    signInSuccess,
    signInFailure,
} from '../redux/Users/userSlice';

//importing google signin Component
import GoogleSign from '../components/GoogleSign';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.user);
    const dispatch = useDispatch();



    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const initialValues = {
        email: '',
        password: ''
    };



    const onSubmit = async (values, { setSubmitting }) => {
        try {
            dispatch(signInStart());
            const { data } = await axios.post(APIEndPoints.sign_in.url, values);
            if (data.success === false) {
                dispatch(signInFailure(data.message));
                return;
            }
            dispatch(signInSuccess(data));
            navigate('/');
        } catch (error) {
            dispatch(signInFailure(error.response?.data?.message || error.message));
            toast.error(error.response.data.message);

        } finally {
            setSubmitting(false);
        }
    };




    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-700">
            {/* Background image of the login form */}
            <div className='absolute w-full h-full'>
                <img src={Loginform} alt='login' className='object-cover w-full h-full' />
            </div>
            {/* Overlay to darken the background image */}
            <div className="absolute w-full h-full bg-black opacity-80"></div>
            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-30">
                <SignupRules />
                <div className="flex-1 p-6 md:p-12 bg-white bg-opacity-30 text-black relative">
                    <h2 className="text-2xl font-bold mb-6">Login to Your Account</h2>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                        validateOnBlur={false}
                        validateOnChange={false}
                    >
                        {({ isSubmitting, errors, touched }) => (
                            <Form className='mt-20'>
                                <div className="mt-10 mb-4 flex items-center border rounded-md overflow-hidden">
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

                                <div className=" mt-10 mb-4 flex items-center border rounded-md overflow-hidden">
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

                                <button type="submit" disabled={loading || isSubmitting} className="mt-10 w-full p-3 bg-red-500 hover:bg-red-800 text-white rounded-md">
                                    {loading || isSubmitting ? 'Loading...' : 'Login'}
                                </button>
                            </Form>
                        )}
                    </Formik>
                    <div className="my-4 flex items-center justify-between">
                        <span className="border-t flex-grow mr-3"></span>
                        <span>Or Login With</span>
                        <span className="border-t flex-grow ml-3"></span>
                    </div>
                    <GoogleSign />
                    <div className="mt-4 text-center">
                        <Link to={'/signup'} className="text-blue-800">Don't have an account? Register here</Link>
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

export default Login;
