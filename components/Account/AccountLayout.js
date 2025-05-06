
import React from 'react';
import AccountSidebar from './AccountSidebar';

const AccountLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow">
          <AccountSidebar />
          <div className="flex-1 p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountLayout;