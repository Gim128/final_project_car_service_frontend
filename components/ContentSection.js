/* eslint-disable @next/next/no-img-element */
'use client'

import React, { use } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faThumbsUp, faCar, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContentSection = () => {
  return (
    <div className='container mx-auto px-4 py-16 md:py-24'>
        <div className='text-center mb-20'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                Find Your Perfect <span className='text-blue-600'>Car</span>
            </h2>
            <p className='text-lg md:text-xl text-gray-600 mb-8'>
                Browse thousands of car listings from trusted sellers nationwide
            </p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
                <div className='bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                    <div className='bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                        <span className='text-blue-600 text-xl font-bold'>1</span>
                    </div>
                    <h3 className='text-xl font-semibold mb-3'>Register in our Website</h3>
                    <p className='text-gray-600'>Create your account in just 2 minutes and get access to thousands of listings.</p>
                </div>

                <div className='bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                    <div className='bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                        <span className='text-blue-600 text-xl font-bold'>2</span>
                    </div>
                    <h3 className='text-xl font-semibold mb-3'>Pick Your Favourite</h3>
                    <p className='text-gray-600'>Use our advanced filters to find exactly what youre looking for.</p>
                </div>

                <div className='bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                    <div className='bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                        <span className='text-blue-600 text-xl font-bold'>3</span>
                    </div>
                    <h3 className='text-xl font-semibold mb-3'>Chill It</h3>
                    <p className='text-gray-600'>We wll handle the paperwork and delivery - you just enjoy your new car!</p>
                </div>

            </div>

        </div>


        <div className="relative rounded-xl overflow-hidden mb-20 h-64 md:h-80">
            <img 
                src="../images/1.jpg"
                alt="Rental Car Banner"
                className="w-full h-full object-cover"
            />
        

            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col md:flex-row items-center justify-center md:justify-between px-8 md:px-12">
                <div className="text-center md:text-left mb-6 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center justify-center md:justify-start">
                    <FontAwesomeIcon icon={faCar} className="mr-3" />
                    NEED A RENTAL CAR?
                </h3>
                <p className="text-blue-100">Elizabeth Pickman, Conscience</p>
                </div>
                <div className="text-2xl md:text-3xl font-bold">
                <a 
                    href="tel:00012345678" 
                    className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white transition-colors px-6 py-3 rounded-lg flex items-center"
                >
                    <FontAwesomeIcon icon={faPhone} className="mr-3" />
                    000 - 1234 - 5678
                </a>
                </div>
            </div>
        </div>
        {/* CTA */}


        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20'>
            <div className='lg:col-span-2'>
                <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-6'>Heading 01</h2>
                <p className='text-gray-600 mb-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit 
                    interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per 
                    conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                </p>

                <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit 
                    interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per 
                    conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                </p>

            </div>

            <div className='bg-gray-50 p-8 rounded-xl'>
                <div className='flex items-start mb-6'>
                    <FontAwesomeIcon icon={faThumbsUp} className='text-blue-600 text-xl mt-1 mr-4' />
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Easy</h3>
                        <p className="text-gray-600">Simple process from start to finish</p>
                    </div>
                </div>

                <div className="flex items-start mb-6">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600 text-xl mt-1 mr-4" />
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Island-wide</h3>
                        <p className="text-gray-600">Service available across the country</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <FontAwesomeIcon icon={faClock} className="text-blue-600 text-xl mt-1 mr-4" />
                    <div>
                        <h3 className="text-xl font-semibold mb-2">24/7</h3>
                        <p className="text-gray-600">Round-the-clock customer support</p>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default ContentSection;
