import React, {useState} from 'react';
import ServiceCenterCard from './ServiceCenterCard';

const ServiceCenterDirectory = () => {

    const serviceCenters = [
        {
          id: 1,
          name: 'Leo Munasinghe',
          address: 'No: 18, Old Road, Kakutara South.',
          phone: '076 9616628',
          image: 'https://randomuser.me/api/portraits/men/1.jpg'
        },
        {
          id: 2,
          name: 'Gimhan Pabasara',
          address: 'No: 22, Old Road, Kakutara North.',
          phone: '071 4811621',
          image: 'https://randomuser.me/api/portraits/men/2.jpg'
        },
        {
          id: 3,
          name: 'Anil Kuttige',
          address: 'No: 3/4/A/, Kirula Road, Colombo-05.',
          phone: '071 7485145',
          image: 'https://randomuser.me/api/portraits/men/3.jpg'
        },
        {
          id: 4,
          name: 'Niro Fernando',
          address: 'No: 21/1/A, Sea Road, Colombo-04.',
          phone: '076 4152852',
          image: 'https://randomuser.me/api/portraits/men/4.jpg'
        },
        {
          id: 5,
          name: 'Lashen Chamika',
          address: 'No: 314, St. Avenue Road, Kotahena.',
          phone: '074 9568741',
          image: 'https://randomuser.me/api/portraits/men/5.jpg'
        },
        {
          id: 6,
          name: 'Mahela  Silva',
          address: 'No: 314, St. Avenue Road, Kotahena.',
          phone: '074 9568741',
          image: 'https://randomuser.me/api/portraits/men/6.jpg'
        },
        {
          id: 7,
          name: 'Nadeeshan gamage',
          address: 'No: 314, St. Avenue Road, Kotahena.',
          phone: '074 9568741',
          image: 'https://randomuser.me/api/portraits/men/6.jpg'
        },
        {
          id: 8,
          name: 'Shevon Micheal',
          address: 'No: 314, St. Avenue Road, Kotahena.',
          phone: '074 9568741',
          image: 'https://randomuser.me/api/portraits/men/6.jpg'
        },
        {
          id: 9,
          name: 'Isuru Udana',
          address: 'No: 314, St. Avenue Road, Kotahena.',
          phone: '074 9568741',
          image: 'https://randomuser.me/api/portraits/men/6.jpg'
        },
        {
          id: 10,
          name: 'Chamika Karunarathne',
          address: 'No: 314, St. Avenue Road, Kotahena.',
          phone: '074 9568741',
          image: 'https://randomuser.me/api/portraits/men/6.jpg'
        }
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const centersPerPage = 5;

  // Filter centers based on search term
    const filteredCenters = serviceCenters.filter(center =>
        center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        center.address.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastCenter = currentPage * centersPerPage;
    const indexOfFirstCenter = indexOfLastCenter - centersPerPage;
    const currentCenters = filteredCenters.slice(indexOfFirstCenter, indexOfLastCenter);
    const totalPages = Math.ceil(filteredCenters.length / centersPerPage);


  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Broker Directory</h1>
      
      <div className="mb-6">
        <p className="text-gray-600 mb-4">
          Only list vehicles that are already in Sri Lanka. Ads for vehicles not currently in Sri Lanka will be removed or subject to a fee.
        </p>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search by name or location..."
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
        {currentCenters.map(center => (
          <ServiceCenterCard key={center.id} center={center} />
        ))}
      </div>

      {/* Pagination */}
      {filteredCenters.length > centersPerPage && (
        <div className="flex justify-center items-center gap-1 mt-8">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Previous
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
            <span className="px-1">...</span>
          )}

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ServiceCenterDirectory;
