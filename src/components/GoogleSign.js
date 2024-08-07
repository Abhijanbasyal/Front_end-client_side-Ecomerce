import React from 'react'
import { FaGoogle } from 'react-icons/fa';
import { toast } from "react-hot-toast";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { app } from "../firebase";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/Users/userSlice';
import { useNavigate } from 'react-router-dom';
import APIEndPoints from '../common/APIEndPoints';


const GoogleSign = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const googleAuth = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);//signInWithRedirect for redirect

            console.log(result)

            const response = await axios.post(APIEndPoints.google_sign.url, {
                name: result.user.displayName,
                email: result.user.email,
                photo: result.user.photoURL,
            });

            const data = response.data;
            dispatch(signInSuccess(data));
            navigate('/');

        } catch (error) {
            toast.error("Something went wrong, Please try again");
            console.log(error);
        }
    }


    return (
        <div className="flex space-x-3 mt-4">
            <button onClick={googleAuth} className="w-full p-3 bg-blue-600  text-white rounded-md flex items-center justify-center hover:bg-blue-800">
                <FaGoogle className="mr-2" /> Google
            </button>
        </div>
    )
}

export default GoogleSign
