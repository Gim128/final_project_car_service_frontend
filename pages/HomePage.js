
'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCar } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  return (
    <div className="relative bg-gray-100 py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1480')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find Your Perfect <span className="text-blue-600">Car</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Browse thousands of car listings from trusted sellers nationwide
          </p>
          
          {/* Search Bar */}
          <div className="bg-white rounded-lg shadow-lg p-2 flex items-center max-w-2xl mx-auto">
            <div className="flex-grow relative">
              <FontAwesomeIcon 
                icon={faSearch} 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full pl-12 pr-4 py-3 focus:outline-none text-gray-700"
              />
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
          
          {/* Popular Searches */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="text-gray-500">Popular:</span>
            <a href="#" className="px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300">
              <FontAwesomeIcon icon={faCar} className="mr-1" /> SUVs
            </a>
            <a href="#" className="px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300">
              <FontAwesomeIcon icon={faCar} className="mr-1" /> Sedans
            </a>
            <a href="#" className="px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300">
              <FontAwesomeIcon icon={faCar} className="mr-1" /> Trucks
            </a>
            <a href="#" className="px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300">
              <FontAwesomeIcon icon={faCar} className="mr-1" /> Electric
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
