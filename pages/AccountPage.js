import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const AccountPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userAds, setUserAds] = useState([]);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  // Simulate fetching user data and ads from DB
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // In a real app, you would make an API call here
        // For simulation, we'll use mock data after a delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Check if user is logged in (in a real app, check auth token)
        const loggedIn = localStorage.getItem('authToken') !== null;
        setIsLoggedIn(loggedIn);
        
        if (!loggedIn) {
          navigate('/login');
          return;
        }

        // Simulate fetching user profile
        setUserName('Gimhan Pabasara');
        
        // Simulate fetching user ads (randomly decide if user has ads or not)
        const hasAds = Math.random() > 0.5; // 50% chance of having ads
        if (hasAds) {
          setUserAds([
            { id: 1, title: 'All New Honda', price: 'Rs.780,000,000' },
            { id: 2, title: 'Toyota CT86', price: 'Rs.780,000,000' },
            { id: 3, title: 'Lamborghini Aventador', price: 'Rs.780,000,000' }
          ]);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="container mx-auto py-8">
          <div className="text-center py-20">Loading...</div>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return null; // Already redirected to login
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-gray-50 p-4">
            <h2 className="text-xl font-semibold mb-6">{userName}</h2>
            <ul className="space-y-4">
              <li>
                <button className="block hover:text-blue-600 w-full text-left">My Ads</button>
              </li>
              <li>
                <button className="block hover:text-blue-600 w-full text-left">Settings</button>
              </li>
              <li>
                <button className="block hover:text-blue-600 w-full text-left">My Profile</button>
              </li>
            </ul>
            <button 
              className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => navigate('/post-ad')}
            >
              Post Ad
            </button>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            <h2 className="text-2xl font-semibold mb-6">My Ads</h2>
            
            {userAds.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userAds.map((ad) => (
                  <div key={ad.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-medium mb-2">{ad.title}</h3>
                    <p className="text-blue-600 font-semibold">{ad.price}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">You don&apos;t have any ads yet.</p>
                <button 
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                  onClick={() => navigate('/post-ad')}
                >
                  Post Your First Ad
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;