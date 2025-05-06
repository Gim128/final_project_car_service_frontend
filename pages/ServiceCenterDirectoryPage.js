import Navbar from '@/components/Navbar'
import ServiceCenterDirectory from '@/components/ServiceCenter/ServiceCenterDirectory' 
import React from 'react'

const ServiceCenterDirectoryPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar />
        <ServiceCenterDirectory/>
    </div>
  );
};

export default ServiceCenterDirectoryPage;
