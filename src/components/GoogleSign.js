import React from 'react'
import { FaGoogle } from 'react-icons/fa';
import {toast} from "react-hot-toast";
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";
import {app} from "../firebase";

const GoogleSign = () => {

    const googleAuth = async () => {
        try{
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);

            console.log(result)

        }catch(error){
            toast.error("Something went wrong, Please try again");
            console.log(error);
        }
    }


    return (
        <div className="flex space-x-3 mt-4">
            <button  onClick={googleAuth} className="w-full p-3 bg-blue-600  text-white rounded-md flex items-center justify-center hover:bg-blue-800">
                <FaGoogle className="mr-2" /> Google
            </button>
        </div>
    )
}   

export default GoogleSign
