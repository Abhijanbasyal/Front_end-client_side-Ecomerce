import React from 'react'
import { FaGoogle } from 'react-icons/fa'

const GoogleSign = () => {
    return (
        <div className="flex space-x-3 mt-4">
            <button className="w-full p-3 bg-blue-600  text-white rounded-md flex items-center justify-center">
                <FaGoogle className="mr-2" /> Google
            </button>
        </div>
    )
}   

export default GoogleSign
