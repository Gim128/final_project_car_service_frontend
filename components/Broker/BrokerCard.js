/* eslint-disable @next/next/no-img-element */
import React from 'react'

const BrokerCard = ({broker}) => {
  return (
    <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <div className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden">
          <img 
            src={broker.image} 
            alt={broker.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{broker.name}</h3>
          <p className="text-sm text-blue-600 mb-2">Registered Service center in CarPortal</p>
          <p className="text-gray-600">{broker.address}</p>
          <p className="text-gray-800 font-medium mt-2">{broker.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default BrokerCard;
