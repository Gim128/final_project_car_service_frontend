/* eslint-disable @next/next/no-img-element */
import React from 'react'

const ServiceCenterCard = ({center}) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
          <img 
            src={center.image} 
            alt={center.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold">{center.name}</h3>
          <p className="text-sm text-blue-600 mb-2">Registered Broker in CarPortal</p>
          <ul className="space-y-1">
            <li className="flex items-start">
              <span className="mr-2">-</span>
              <span>{center.address}</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">-</span>
              <span>{center.phone}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceCenterCard;
