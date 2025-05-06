import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
        <div className='bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20'>
            <div className='p-5'>
                <ul>
                    <p className='text-gray-800 font-bold text-3xl pb-6'>
                        Car <span className='text-blue-700'>Service</span>
                    </p>

                    <div className='flex gap-5 pb-5'>
                        <FontAwesomeIcon icon={faFacebook} className='w-5 cursor-pointer hover:to-blue-400' />
                        <FontAwesomeIcon icon={faYoutube} className='w-5 cursor-pointer hover:to-blue-400' />
                        <FontAwesomeIcon icon={faInstagram} className='w-5 cursor-pointer hover:to-blue-400' />
                        <FontAwesomeIcon icon={faTwitter} className='w-5 cursor-pointer hover:to-blue-400' />
                    </div>
                </ul>
            </div>

            <div className='p-5'>
                <ul>
                    <p className='text-gray-800 font-bold text-2xl pb-4'>Services</p>
                    <li className='text-gray-500 text-md pb-2 font-medium hover:text-blue-600 cursor-pointer'>Home</li>
                    <li className='text-gray-500 text-md pb-2 font-medium hover:text-blue-600 cursor-pointer'>About Us</li>
                    <li className='text-gray-500 text-md pb-2 font-medium hover:text-blue-600 cursor-pointer'>Contact Us</li>
                    <li className='text-gray-500 text-md pb-2 font-medium hover:text-blue-600 cursor-pointer'>Custoner Care</li>
                </ul>
            </div>

            <div className='p-5'>
                <ul>
                    <p className='text-gray-800 font-bold text-2xl pb-4'>Our Products</p>
                    <li className='text-gray-500 text-md pb-2 font-medium hover:text-blue-600 cursor-pointer'>Brokers</li>
                    <li className='text-gray-500 text-md pb-2 font-medium hover:text-blue-600 cursor-pointer'>Service Centers</li>
                    <li className='text-gray-500 text-md pb-2 font-medium hover:text-blue-600 cursor-pointer'>Spare Parts</li>
                    <li className='text-gray-500 text-md pb-2 font-medium hover:text-blue-600 cursor-pointer'>Calc</li>
                </ul>
            </div>

            <div className='p-5'>
                <ul>
                    <p className='text-gray-800 font-bold text-2xl pb-4'>Support</p>
                    <li className='text-gray-500 text-md pb-2 font-medium hover:text-blue-600 cursor-pointer'>Loanfy</li>
                    <li className='text-gray-500 text-md pb-2 font-medium hover:text-blue-600 cursor-pointer'>Celomart</li>
                    <li className='text-gray-500 text-md pb-2 font-medium hover:text-blue-600 cursor-pointer'>Mobil1</li>
                    <li className='text-gray-500 text-md pb-2 font-medium hover:text-blue-600 cursor-pointer'>Calc</li>
                </ul>
            </div>
        </div>

        <div className='flex flex-col justify-center items-center text-center p-5 bg-gray-50'>
            <h1 className='text-gray-800 font-semibold'>0 2024 - 2025 All Rights Reserved | Build with LeoDesign</h1>
        </div>

    </>

    
  )
}

export default Footer
