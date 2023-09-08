import React from 'react';

const WildcardPage = () => {
  return (
    <div className="wildcard">
        <div className="left">
            <div className="flex items-center justify-center">
                <div className="p-8 rounded shadow-md text-center">
                    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                    <p className="text-gray-600">The page you're looking for doesn't exist.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default WildcardPage;
