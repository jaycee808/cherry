import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-page">
            <Outlet />

            <div className="home-banner">
                <h2 className="tagline">Take a bite</h2>
            </div>

            <button className="homeBtn">
                <Link to="/shop">
                        Browse Products
                </Link>
            </button>
        </div>
    );
}

export default Home;