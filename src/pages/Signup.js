import React from 'react'
import Signupform from '../assets/form.jpg';

const Signup = () => {
    return (
        <div className='w-screen h-screen'>
            {/* background image of the signup form  */}
            <div className='absolute w-full h-full '>
                <img src={Signupform} alt='form' className='object-cover w-full h-full' />

            </div>

            {/* Title and form */}
            <div className='relative  flex  items-center  w-full h-full'>

                <div className='w-[40rem]'>
                    <h2 className='text-4xl font-extrabold text-white '>Welcome to Lido Ecommerce Center</h2>
                    <p className='text-white'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type
                    </p>
                </div>
                <div className='h-full rounded-s-full'>
                    <div>Sign Up</div>
                    <div>Create an account</div>
                    asdasdasdasdasdasd
                    asdasdasdasdasdasdasd
                    asdasdasdasdasdasdasd

                </div>
            </div>
        </div>
    )
}

export default Signup
