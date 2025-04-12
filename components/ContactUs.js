"use client"
import React from 'react'
import {  faMapMarkerAlt, faClock, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactUs = () => {
  return (
    <div className='bg-gray-50 py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
            <h1 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
                Contact Us
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600 text-xl" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Head Office</h2>
                </div>
                <div className="pl-16">
                <p className="text-gray-600 mb-2">No.43/1/1, Navam Mawatha, Colombo-02.</p>
                <p className="text-gray-600 mb-4">00200, Sri Lanka</p>
                <div className="flex items-center text-gray-600 mb-2">
                    <FontAwesomeIcon icon={faPhone} className="mr-3 text-blue-500" />
                    <span>+94 (0) 11 2 123 456</span>
                </div>
                <div className="flex items-center text-gray-600">
                    <FontAwesomeIcon icon={faClock} className="mr-3 text-blue-500" />
                    <span>Mon-Fri: 9AM - 5PM</span>
                </div>
                </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600 text-xl" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Sub-Head Office</h2>
                </div>
                <div className="pl-16">
                    <p className="text-gray-600 mb-2">No.43/1/1, Navam Mawatha, Colombo-02.</p>
                    <p className="text-gray-600 mb-4">00200, Sri Lanka</p>
                    <div className="flex items-center text-gray-600 mb-2">
                        <FontAwesomeIcon icon={faPhone} className="mr-3 text-blue-500" />
                        <span>+94 (0) 11 2 123 456</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <FontAwesomeIcon icon={faClock} className="mr-3 text-blue-500" />
                        <span>Mon-Fri: 9AM - 5PM</span>
                    </div>
                </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600 text-xl" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Regional Office</h2>
                </div>
                <div className="pl-16">
                <p className="text-gray-600 mb-2">No.43/1/1, Navam Mawatha, Colombo-02.</p>
                <p className="text-gray-600 mb-4">00200, Sri Lanka</p>
                <div className="flex items-center text-gray-600 mb-2">
                    <FontAwesomeIcon icon={faPhone} className="mr-3 text-blue-500" />
                    <span>+94 (0) 11 2 123 456</span>
                </div>
                <div className="flex items-center text-gray-600">
                    <FontAwesomeIcon icon={faClock} className="mr-3 text-blue-500" />
                    <span>Mon-Fri: 9AM - 5PM</span>
                </div>
                </div>
            </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
          <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full bg-blue-600 border border-transparent rounded-md py-3 px-6 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
