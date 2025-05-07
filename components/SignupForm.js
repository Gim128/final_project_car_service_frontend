import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { createUser } from '@/utils/api';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {

  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', or 'error'


  const handleSignUp = async (data) => {
    try {
      const response = await createUser(data);
      console.log('User created:', response.data);
    } catch (error) {
      console.error('Error creating user:', error);
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
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().min(6, 'At least 6 characters').required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm your password'),
    }),
    onSubmit: (formData) => {
      console.log('Submitted:', formData);
      setIsSubmitting(true);
      setSubmitStatus(null);


      try {
        let data = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          userName: formData.email,
          userType: 2
        }
        handleSignUp(data);

        if (response.success) {
          setSubmitStatus('success');
          // Redirect to login after 2 seconds
          setTimeout(() => {
            router.push('/login');
          }, 2000);
        } else {
          setSubmitStatus('error');
          setErrors({ api: response.message || 'Signup failed' });
        }
      } catch (error) {
        console.log(error)
        setSubmitStatus('error');
        setErrors({ api: error.message || 'An error occurred during signup' });
      } finally {
        setIsSubmitting(false);
      }
    },
  });


  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md'>
        <h2 className='text-3xl font-bold mb-6 text-center text-white'>
          <span className='bg-gradient-to-r text-transparent from-blue-500 to bg-purple-500 bg-clip-text'>SignUp</span>
        </h2>

        <form onSubmit={formik.handleSubmit}>
          {/* First Name */}
          <div className='mb-6'>
            <input
              name='firstName'
              type='text'
              placeholder='First Name'
              className='shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className='text-red-500 text-sm mt-1'>{formik.errors.firstName}</div>
            )}
          </div>

          {/* Last Name */}
          <div className='mb-6'>
            <input
              name='lastName'
              type='text'
              placeholder='Last Name'
              className='shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className='text-red-500 text-sm mt-1'>{formik.errors.lastName}</div>
            )}
          </div>

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

          {/* Confirm Password */}
          <div className='mb-6'>
            <input
              name='confirmPassword'
              type='password'
              placeholder='Confirm Password'
              className='shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <div className='text-red-500 text-sm mt-1'>{formik.errors.confirmPassword}</div>
            )}
          </div>

          {/* Submit */}
          <div className='flex items-center justify-center'>
            <button
              type='submit'
              className='bg-gradient-to-r from-blue-500 to-blue-700 hover:from-purple-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full'
            >
              SIGNUP
            </button>
          </div>
        </form>

        <p className='text-center mt-4 text-gray-600'>
          Already have account?
          <Link href="/login" className='text-blue-600 hover:underline'>Login</Link>
        </p>

      </div>
    </div>
  )
}

export default SignupForm;
