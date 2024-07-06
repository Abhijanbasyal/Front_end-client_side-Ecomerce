import React from 'react';
import { FaStarOfLife } from "react-icons/fa6";
import { motion } from "framer-motion";

const SignupRules = () => {
  return (
    <motion.div 
      className="flex-1 p-6 md:p-12 bg-gray-800 bg-opacity-50 text-white"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Welcome to Logdy
      </motion.h1>
      <motion.p 
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.
      </motion.p>
      <motion.h2
        className="text-2xl font-semibold mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        Follow the rules
      </motion.h2>
      <ul className="space-y-2">
        <h3 className="text-xl font-semibold mb-2">For username</h3>
        <motion.li className='flex items-center' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.8 }}>
          <FaStarOfLife className="mr-2 text-red-500" /><span>Username should not be shorter than 4 letters</span>
        </motion.li>
        <motion.li className='flex items-center' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3, duration: 0.8 }}>
          <FaStarOfLife className="mr-2 text-red-500" /><span>Username should not be longer than 15 letters</span>
        </motion.li>
      </ul>
      <ul className="space-y-2 mt-4">
        <h3 className="text-xl font-semibold mb-2">For password</h3>
        <motion.li className='flex items-center' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }}>
          <FaStarOfLife className="mr-2 text-red-500" /><span>Password must contain at least 8 characters</span>
        </motion.li>
        <motion.li className='flex items-center' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7, duration: 0.8 }}>
          <FaStarOfLife className="mr-2 text-red-500" /><span>One special character</span>
        </motion.li>
        <motion.li className='flex items-center' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9, duration: 0.8 }}>
          <FaStarOfLife className="mr-2 text-red-500" /><span>One number</span>
        </motion.li>
        <motion.li className='flex items-center' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1, duration: 0.8 }}>
          <FaStarOfLife className="mr-2 text-red-500" /><span>One lowercase letter</span>
        </motion.li>
        <motion.li className='flex items-center' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.3, duration: 0.8 }}>
          <FaStarOfLife className="mr-2 text-red-500" /><span>One uppercase letter</span>
        </motion.li>
      </ul>
    </motion.div>
  )
}

export default SignupRules;
