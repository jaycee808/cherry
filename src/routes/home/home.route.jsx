import React from 'react';
import { Outlet } from 'react-router-dom';

function Home() {
    return (
        <div className="bg-white text-black">
            <Outlet />

            <div className="relative h-screen">
                <img
                    src="/images/background.png"
                    alt="Cherry"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}

                <div className="absolute inset-0 flex justify-center items-center">
                    <h2 className="text-4xl font-bold text-pink-600">Take a bite</h2>
                </div>
            </div>

            <div className="product-display grid grid-cols-1 sm:grid-cols-2 gap-6 py-10 px-4 bg-white">
                <div className="product-category text-center bg-pink-200 p-6 rounded-md shadow-md">
                    <h2 className="text-2xl font-bold text-pink-600 mb-2">Lips</h2>
                    <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-pink-600 transition duration-300">Shop Now</button>
                </div>
                <div className="product-category text-center bg-pink-200 p-6 rounded-md shadow-md">
                    <h2 className="text-2xl font-bold text-pink-600 mb-2">Eyes</h2>
                    <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-pink-600 transition duration-300">Shop Now</button>
                </div>
            </div>
        </div>
    );
}

export default Home;