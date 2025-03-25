import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SignupForm = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md'>
        <h2 className='text-3xl font-bold mb-6 text-center text-white'>
            <span className='bg-gradient-to-r text-transparent from-blue-500 to bg-purple-500 bg-clip-text'>SignUp</span>
        </h2>

        <form>
            <div className='mb-6'>
                <div>
                    <input 
                        id='firstName' type='text' autoComplete='off'
                        className='shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        placeholder='First Name'
                    />
                </div>
            </div>

            <div className='mb-6'>
                <div>
                    <input 
                        id='lastName' type='text' autoComplete='off'
                        className='shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        placeholder='Last Name'
                    />   
                </div>
            </div>

            <div className='mb-6'>
                <div>
                <input 
                    id='email' type='email' autoComplete='off'
                    className='shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    placeholder='Email'
                />
                </div>
            </div>
            
            <div className='mb-6'>
                  <div>
                    <input 
                            id='password' type='password' autoComplete='off'
                            className='shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            placeholder='Password'
                    />
                  </div>
            </div>

            <div className='mb-6'>
                  <div>
                    <input 
                            id='password' type='password' autoComplete='off'
                            className='shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            placeholder='Confirm Password'
                    />
                  </div>
            </div>

            <div className='flex items-center justify-center '>
                <button type='submit' className='bg-gradient-to-r from-blue-500 to-blue-700 hover:from-purple-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full'>
                SIGNUP
                </button>
            </div>

        </form>

        <p className='text-center mt-4 text-gray-600'>
          Already have account? 
          <Link href="/" className='text-blue-600 hover:underline'>Login</Link>
        </p>

      </div>
    </div>
  )
}

export default SignupForm
