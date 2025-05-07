'use client';

import React from 'react'
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userLogin } from '@/utils/api';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setErrors] = useState(null);

  const mockUsers = [
    { email: 'test@gmail.com', password: 'test', name: 'Demo User' },
    { email: 'user@example.com', password: 'password123', name: 'Demo User' },
    { email: 'admin@example.com', password: 'admin123', name: 'Admin User' }
  ];

  const handleLogin = async (data) => {
    try {
      const response = await userLogin(data);
      console.log('User created:', response?.data);
      localStorage.setItem("token",response?.data?.accessToken);
      return response;
    } catch (error) {
      console.error('Error creating user:', error);
      return null;
    }
  };

  const formik = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      validationSchema: Yup.object({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'At least 6 characters').required('Password is required'),
      }),
      onSubmit: (formData) => {
        console.log('Submitted:', formData);
        setIsLoading(true);
  
  
        try {
          let data = {
            email: formData.email,
            password: formData.password,
          }
          const response = handleLogin(data);
  
          if (response) {
            // Redirect to login after 2 seconds
            toast.success('Login Success');
            setTimeout(() => {
              navigate('/');
            }, 2000);
          } else {
            setErrors({ api: response.message || 'Signup failed' });
          }
        } catch (error) {
          console.log(error)
          setError({ api: error.message || 'An error occurred during signup' });
        } finally {
          setIsLoading(false);
        }
      },
    });


  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md'>
        <h2 className='text-3xl font-bold mb-6 text-center text-white'>
            <span className='bg-gradient-to-r text-transparent from-blue-500 to bg-purple-500 bg-clip-text'>Login</span>
        </h2>

        <form onSubmit={formik.handleSubmit}>
          {/* Email */}
          <div className='mb-6'>
            <input
              name='email'
              type='email'
              placeholder='Email'
              className='shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className='text-red-500 text-sm mt-1'>{formik.errors.email}</div>
            )}
          </div>

          {/* Password */}
          <div className='mb-6'>
            <input
              name='password'
              type='password'
              placeholder='Password'
              className='shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className='text-red-500 text-sm mt-1'>{formik.errors.password}</div>
            )}
          </div>

          {/* Submit */}
          <div className='flex items-center justify-center'>
            <button
              type='submit'
              className='bg-gradient-to-r from-blue-500 to-blue-700 hover:from-purple-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full'
            >
              Login
            </button>
          </div>
        </form>

        <p className='text-center mt-4 text-gray-600'>
          Don&apos;t have an account? 
          <Link href="/signup" 
          className='text-blue-600 hover:underline'>Sign Up</Link>
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
