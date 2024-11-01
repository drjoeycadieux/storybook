import React from 'react';

const Banner: React.FC = () => {
    return (
        <div className="relative bg-blue-600 p-8 text-center text-white rounded-lg shadow-lg mb-6">
            <h1 className="text-4xl font-bold mb-2">Welcome to Our Website</h1>
            <p className="text-lg">Your journey to knowledge begins here.</p>
            <button className="mt-4 px-6 py-2 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-100 transition">
                Get Started
            </button>
        </div>
    );
};

export default Banner;
