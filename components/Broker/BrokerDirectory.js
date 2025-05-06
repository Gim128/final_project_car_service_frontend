import React, {useState} from 'react';
import BrokerCard from './BrokerCard';

const BrokerDirectory = () => {


    const brokers = [
        {
            id: 1,
            name: 'Sameera Auto Service',
            address: 'No.18, Old Road, Kalutara South.',
            phone: '076 9616628',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 2,
            name: 'U U Auto Service Center',
            address: 'No.22, Old Road, Kakutara North.',
            phone: '071 4811621',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 3,
            name: 'Janaka Motors',
            address: 'No.34/I/A, Kirula Road, Colombo-05.',
            phone: '077 7485145',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 4,
            name: 'Honda AutoMart',
            address: 'No.21/I/A, Sea Road, Colombo-04.',
            phone: '076 4152852',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 5,
            name: 'Super Line Auto',
            address: 'No.314, St. Avenue Road, Kotahena.',
            phone: '074 9568741',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 6,
            name: 'Laksala Auto Service',
            address: 'No.314, St. Avenue Road, Kotahena.',
            phone: '074 9568741',
            image: 'https://via.placeholder.com/150'
        },
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const brokersPerPage = 4;

    const filteredBrokers = brokers.filter(broker =>
        broker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        broker.address.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // for pagination
    const indexOfLastBroker = currentPage * brokersPerPage;
    const indexOfFirstBroker = indexOfLastBroker - brokersPerPage;
    const currentBrokers = filteredBrokers.slice(indexOfFirstBroker, indexOfLastBroker);
    const totalPages = Math.ceil(filteredBrokers.length / brokersPerPage);
    
    
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-4">Service Center Directory</h1>
                <div className="mb-4">
                <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="w-full md:w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1); // Reset to first page on new search
                    }}
                />
                </div>
                <p className="text-gray-600 text-sm">
                Only list vehicles that are already in Sri Lanka. Ads for vehicles not currently in Sri Lanka will be removed or subject to a fee.
                </p>
            </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {currentBrokers.map(broker => (
            <BrokerCard key={broker.id} broker={broker} />
            ))}
        </div>

        {/* Pagination */}
        {filteredBrokers.length > brokersPerPage && (
            <div className="flex justify-center items-center gap-2 mt-8">
            <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border rounded disabled:opacity-50"
            >
                Previous
            </button>
            
            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                // Show limited page numbers with ellipsis
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
                    className={`px-4 py-2 border rounded ${currentPage === pageNum ? 'bg-blue-500 text-white' : ''}`}
                >
                    {pageNum}
                </button>
                );
            })}

            {totalPages > 5 && (
                <span className="px-2">...</span>
            )}

            <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border rounded disabled:opacity-50"
            >
                Next
            </button>
            </div>
        )}
    </div>
    );
};

export default BrokerDirectory
