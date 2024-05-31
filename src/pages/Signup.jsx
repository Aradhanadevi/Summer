import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='h-[90vh] flex items-center justify-center'>
        <div className='p-2 w-2/6 rounded bg-gray-800'>
            <div className='text-xl font-semibold'>SignUp</div>
            <input
                type="username"
                placeholder='username'
                className='bg-gray-700 px-3 py-2 my-3 w-full rounded'   
                name='username' 
            />
            <input
                type="email"
                placeholder='email'
                className='bg-gray-700 px-3 py-2 my-3 w-full rounded'   
                name='abc@example.com' 
                required
            />
            <input
                type="password"
                placeholder='password'
                className='bg-gray-700 px-3 py-2 my-3 w-full rounded'   
                name='password' 
                required
            />
            <div className='w-full flex items-center justify-between'>
            <button className='bg-yellow-500 text-xl font-semibold text-black px-3 py-2 rounded'>
                Signup
            </button>
            <Link to="/login" className='text-gray-400 hover:text-gray-200 transition-all duration-300'>Already signup? Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Signup;