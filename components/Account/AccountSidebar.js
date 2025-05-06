import React from 'react';
import { NavLink } from 'react-router-dom';

const AccountSidebar = () => {
  return (
    <div className="w-full md:w-64 bg-gray-50 p-4">
      <h2 className="text-xl font-semibold mb-6">Account</h2>
      <ul className="space-y-4">
        <li>
          <NavLink 
            to="/account/my-ads"
            className={({isActive}) => 
              `block hover:text-blue-600 ${isActive ? 'text-blue-600 font-medium' : ''}`
            }
          >
            My Ads
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/account/settings"
            className={({isActive}) => 
              `block hover:text-blue-600 ${isActive ? 'text-blue-600 font-medium' : ''}`
            }
          >
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/account/profile"
            className={({isActive}) => 
              `block hover:text-blue-600 ${isActive ? 'text-blue-600 font-medium' : ''}`
            }
          >
            My Profile
          </NavLink>
        </li>
      </ul>
      <NavLink 
        to="/post-ad"
        className="mt-6 block w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center"
      >
        Post Ad
      </NavLink>
    </div>
  );
};

export default AccountSidebar;
