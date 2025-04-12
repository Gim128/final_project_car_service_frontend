'use client';

import React from 'react'
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    login({ email, name: 'User' }); // Mock login
    navigate('/');
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md'>
        <h2 className='text-3xl font-bold mb-6 text-center text-white'>
            <span className='bg-gradient-to-r text-transparent from-blue-500 to bg-purple-500 bg-clip-text'>Login</span>
        </h2>
        <form>
          {/* email */}
          <div className='mb-6'>
            <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'>
            <FontAwesomeIcon icon={faEnvelope} className='mr-2 inline-block w-3.5'/>
              Email
            </label>
            <div>
              <input 
                id='email' type='email' autoComplete='off'
                className='shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Enter Your Email'
              />
            </div>
          </div>

          {/* password */}
          <div className='mb-6'>
            <label htmlFor='password' className='block text-gray-700 text-sm font-bold mb-2'>
            <FontAwesomeIcon icon={faLock} className='mr-2 inline-block w-3.5'/>
              Password
            </label>
            <div>
              <input 
                id='password' type='password' autoComplete='off'
                className='shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Enter Your Password'
              />
            </div>
          </div>

          <div className='flex items-center justify-center '>
            <button type='submit' className='bg-gradient-to-r from-blue-500 to-blue-700 hover:from-purple-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full'>
              LOGIN
            </button>
          </div>

          <div className='text-center mt-4'>
            <Link href="/" className='text-gray-600 hover:underline'>Forgot Password</Link>
          </div>

        </form>

        <p className='text-center mt-4 text-gray-600'>
          Don&apos;t have an account? 
          <Link href="/" className='text-blue-600 hover:underline'>Sign Up</Link>
        </p>

        <div className='mt-4'>
          <p className='text-center text-gray-600'>or login with</p>
          <div className='flex justify-center mt-2'>
            <Link href="/" className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2'>
            <FontAwesomeIcon icon={faGoogle} 
            className='w-2' /> 
            </Link>

            <Link href="/" className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2'>
            <FontAwesomeIcon icon={faFacebook} className='w-2' /> 
            </Link>
          </div>

          
        </div>

      </div>
    </div>
  )
}

export default LoginForm;
