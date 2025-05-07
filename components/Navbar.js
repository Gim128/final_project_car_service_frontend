'use client';

import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faUser, faBars } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';
// import { useAuth } from '../context/AuthContext';
// import { faL } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState("ENG");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
  
    const languages = ["ENG", "SIN", "TAMIL"];

    const handleLoginClick = () => {
      navigate('/login');
    };
  
    const toggleLogin = () => {
      setIsLoggedIn(!isLoggedIn);
    };

    useEffect (() => {
      let token = localStorage.getItem("token")
      if(token) {
        toggleLogin();
      }
    },[])

    function gotoProfile () {
      navigate("/profile")
    }
  
    return (
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold text-blue-600">CarPortal</div>
  
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="hover:text-blue-600">Home</Link>
              <Link to="#" className="hover:text-blue-600">Post Ad</Link>
              <Link to="#" className="hover:text-blue-600">All Ads</Link>
              <Link to="/contact" className="hover:text-blue-600">Contact Us</Link>
              {/* <Link to="/contact" className="hover:text-blue-600">Contact Us</Link> */}
  
              {/* Language Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center hover:text-blue-600"
                >
                {selectedLang} <FontAwesomeIcon icon={faCaretDown} className="mr-1" /> 
                </button>
                
                {isLangOpen && (
                  <div className="absolute right-0 mt-2 w-20 bg-white shadow-lg rounded-md z-10">
                    {languages.map((lang) => (
                      <div
                        key={lang}
                        onClick={() => {
                          setSelectedLang(lang);
                          setIsLangOpen(false);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {lang}
                      </div>
                    ))}
                  </div>
                )}
              </div>
  
              {/* Conditional Render - Login/User Icon */}
              {isLoggedIn ? (
                <button 
                  className="flex items-center space-x-1"
                  onClick={gotoProfile}
                >
                  <FontAwesomeIcon icon={faUser} className="text-blue-600" />
                  <span>Profile</span>
                </button>
              ) : (
                <button 
                  onClick={handleLoginClick}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Login
                </button>
              )}
            </div>
  
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
  
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <a href="#" className="block hover:text-blue-600">Home</a>
              <a href="#" className="block hover:text-blue-600">Post Ad</a>
              <a href="#" className="block hover:text-blue-600">All Ads</a>
              <a href="#" className="block hover:text-blue-600">Contact Us</a>
              
              {/* Mobile Language Dropdown */}
              <div className="relative mt-2">
                <button 
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center hover:text-blue-600"
                >
                  <FontAwesomeIcon icon={faCaretDown} className="mr-1" /> {selectedLang} ▼
                </button>
                
                {isLangOpen && (
                  <div className="mt-1 w-20 bg-white shadow-lg rounded-md">
                    {languages.map((lang) => (
                      <div
                        key={lang}
                        onClick={() => {
                          setSelectedLang(lang);
                          setIsLangOpen(false);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {lang}
                      </div>
                    ))}
                  </div>
                )}
              </div>
  
              {/* Mobile Login Button */}
              <button 
                onClick={handleLoginClick}
                className={`w-full px-4 py-2 rounded mt-2 ${
                  isLoggedIn 
                    ? "flex items-center justify-center space-x-1" 
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
                // onClick={toggleLogin}
              >
                {isLoggedIn ? (
                  <>
                    <FontAwesomeIcon icon={faUser} className="text-blue-600" />
                    <span>Profile</span>
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          )}
        </div>
      </nav>
    );
  };

export default Navbar

