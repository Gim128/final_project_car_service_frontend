import Navbar from '@/components/Navbar'
import SparePartsDirectory from '@/components/SparePartsShop/SparePartsDirectory'
import React from 'react'

const SparePartsDirectoryPage = () => {
  return (
    <div className='flex flex-col bg-gray-50'>
      {/* <Navbar /> */}
      <SparePartsDirectory />
    </div>
  )
}

export default SparePartsDirectoryPage;
