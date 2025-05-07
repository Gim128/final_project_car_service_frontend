import AddVehicleForm from '@/components/AddVehicleForm'
import Navbar from '@/components/Navbar'
import React from 'react'

const AddVehiclePage = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <AddVehicleForm />
    </div>
  );
};

export default AddVehiclePage;
