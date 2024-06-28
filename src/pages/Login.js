
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Loginform from '../assets/form.jpg';
import { FaEnvelope, FaLock, FaGoogle, FaEye, FaEyeSlash, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import APIEndPoints from '../common/APIEndPoints';
import axios from "axios";



const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    
    const initialValues = {
        email: '',
        password: ''
    };

    const onSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await axios.post(APIEndPoints.login.url, {
                email: values.email,
                password: values.password
            });

            const dataResponse = response.data;

            console.log(dataResponse);
            localStorage.setItem("token", dataResponse.data.token);

            

            toast.success(dataResponse.message);
            navigate("/");


        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
                console.log(error.response.data.message)
            } else {
                toast.error("An error occurred. Please try again.");
            }
        }finally{
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
            <div className="absolute w-full h-full bg-black opacity-50"></div>
            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-30">
                <div className="flex-1 p-6 md:p-12 bg-gray-800 bg-opacity-50 text-white">
                    <h1 className="text-3xl font-bold mb-4">Welcome Back</h1>
                    <p className="mb-8">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.
                    </p>
                </div>
                <div className="flex-1 p-6 md:p-12 bg-white bg-opacity-30 text-black relative">
                    <h2 className="text-2xl font-bold mb-4">Login to Your Account</h2>
                    <Formik
                         initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                        validateOnBlur={false}
                        validateOnChange={false}
                    >
                    
                        {({ errors, touched, validateForm }) => (
                            <Form>
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

                                <button type="submit" className="w-full p-3 bg-red-500 text-white rounded-md">Login</button>
                            </Form>
                        )}
                    </Formik>
                    <div className="my-4 flex items-center justify-between">
                        <span className="border-t flex-grow mr-3"></span>
                        <span>Or Login With</span>
                        <span className="border-t flex-grow ml-3"></span>
                    </div>
                    <div className="flex space-x-3">
                        <button className="w-full p-3 bg-blue-600 text-white rounded-md flex items-center justify-center">
                            <FaGoogle className="mr-2" /> Google
                        </button>
                    </div>
                    <div className="mt-4 text-center">
                        <Link to={'/signup'} className="text-blue-800">Don't have an account? Register here</Link>
                    </div>
                    <Link to="/" className="absolute top-2 right-2 text-gray-800 hover:text-black">
                        <FaTimes size={24} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;