import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const SignupForm = () => {

  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', or 'error'

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    // Clear error when user types
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);


    try {
      // Mock API call - replace with your actual signup endpoint
      const response = await mockSignupAPI(formData);
      
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
      setSubmitStatus('error');
      setErrors({ api: error.message || 'An error occurred during signup' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Mock API function - replace with real API call
  const mockSignupAPI = async (data) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock validation - in real app, this would be server-side validation
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.some(user => user.email === data.email);
    
    if (userExists) {
      return { success: false, message: 'Email already registered' };
    }
    
    // Create new user object (never store passwords like this in production)
    const newUser = {
      id: Date.now(),
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password, // In real app, this should be hashed
      createdAt: new Date().toISOString()
    };
    
    // Save to mock "database"
    localStorage.setItem('users', JSON.stringify([...users, newUser]));
    
    return { success: true, data: newUser };
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md'>
        <h2 className='text-3xl font-bold mb-6 text-center text-white'>
            <span className='bg-gradient-to-r text-transparent from-blue-500 to bg-purple-500 bg-clip-text'>SignUp</span>
        </h2>

        <form onSubmit={handleSubmit}>
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
          <Link href="/login" className='text-blue-600 hover:underline'>Login</Link>
        </p>

      </div>
    </div>
  )
}

export default SignupForm;
