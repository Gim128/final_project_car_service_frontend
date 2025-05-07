// src/components/SpareParts/SparePartsDirectory.jsx
import React, { useState } from 'react';
import SparePartsShopCard from './SparePartsCard';
// import SparePartsShopCard from './SparePartsShopCard';

const SparePartsDirectory = () => {
  // Hardcoded shop data with image placeholders
  const shops = [
    {
      id: 1,
      name: 'Sameera Auto Parts',
      address: 'No.18, Old Road, Kakutara South.',
      phone: '076 9616628',
      image: 'https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?w=200'
    },
    {
      id: 2,
      name: 'U Pal Auto Parts',
      address: 'No.22, Old Road, Kakutara North.',
      phone: '071 4811621',
      image: 'https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?w=200'
    },
    {
      id: 3,
      name: 'Overland Auto Parts',
      address: 'No.34/I/A, Kirula Road, Colombo-05.',
      phone: '071 7485145',
      image: 'https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?w=200'
    },
    {
      id: 4,
      name: 'Volstar Auto',
      address: 'No.21/I/A, Sea Road, Colombo-04.',
      phone: '076 4152852',
      image: 'https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?w=200'
    },
    {
      id: 5,
      name: 'Jagath Auto Parts',
      address: 'No.314, St. Avenue Road, Kotahena.',
      phone: '074 9568741',
      image: 'https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?w=200'
    },
    {
      id: 6,
      name: 'Pink Auto',
      address: 'No.314, St. Avenue Road, Kotahena.',
      phone: '074 9568741',
      image: 'https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?w=200'
    },
    {
        id: 7,
        name: 'Pink Auto',
        address: 'No.314, St. Avenue Road, Kotahena.',
        phone: '074 9568741',
        image: 'https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?w=200'
    },
    {
        id: 6,
        name: 'Pink Auto',
        address: 'No.314, St. Avenue Road, Kotahena.',
        phone: '074 9568741',
        image: 'https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?w=200'
    },
    {
        id: 6,
        name: 'Pink Auto',
        address: 'No.314, St. Avenue Road, Kotahena.',
        phone: '074 9568741',
        image: 'https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?w=200'
    },
    {
        id: 6,
        name: 'Pink Auto',
        address: 'No.314, St. Avenue Road, Kotahena.',
        phone: '074 9568741',
        image: 'https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?w=200'
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const shopsPerPage = 5;

  // Filter shops based on search term
  const filteredShops = shops.filter(shop =>
    shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shop.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastShop = currentPage * shopsPerPage;
  const indexOfFirstShop = indexOfLastShop - shopsPerPage;
  const currentShops = filteredShops.slice(indexOfFirstShop, indexOfLastShop);
  const totalPages = Math.ceil(filteredShops.length / shopsPerPage);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Spare Parts Shop Directory</h1>
      
      <div className="mb-6">
        <p className="text-gray-600 mb-4">
          Only list vehicles that are already in Sri Lanka. Ads for vehicles not currently in Sri Lanka will be removed or subject to a fee.
        </p>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search by shop name or location..."
            className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to first page on new search
            }}
          />
          <svg
            className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {currentShops.map(shop => (
          <SparePartsShopCard key={shop.id} shop={shop} />
        ))}
      </div>

      {/* Pagination */}
      {filteredShops.length > shopsPerPage && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            &lt; Previous
          </button>
          
          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (currentPage <= 3) {
              pageNum = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = currentPage - 2 + i;
            }

            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`px-3 py-1 border rounded ${currentPage === pageNum ? 'bg-blue-500 text-white' : ''}`}
              >
                {pageNum}
              </button>
            );
          })}

          {totalPages > 5 && (
            <span className="px-1">. . .</span>
          )}

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default SparePartsDirectory;