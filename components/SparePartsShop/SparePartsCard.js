/* eslint-disable @next/next/no-img-element */
// src/components/SpareParts/SparePartsShopCard.jsx
import React from 'react';

const SparePartsShopCard = ({ shop }) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
          <img 
            src={shop.image} 
            alt={shop.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="bg-gray-100 inline-block px-2 py-1 rounded mb-2">
            <span className="text-xs font-semibold">AUTOPARTS</span>
          </div>
          <h3 className="text-lg font-bold">{shop.name}</h3>
          <p className="text-sm text-blue-600 mb-2">Registered Spare parts center in CarPortal</p>
          <div className="space-y-1">
            <p className="text-gray-700">{shop.address}</p>
            <p className="text-gray-800 font-medium">{shop.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SparePartsShopCard;