import BrokerDirectory from '@/components/Broker/BrokerDirectory'
import Navbar from '@/components/Navbar'
import React from 'react'

const BrokerDirectoryPage = () => {
  return (
    <div className='flex flex-col bg-gray-50'>
      {/* <Navbar /> */}
      <BrokerDirectory />
    </div>
  );
};

export default BrokerDirectoryPage;
