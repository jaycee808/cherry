import React, { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Fragment>
            <div className="navbar bg-pink-600 text-white px-4 py-2 flex justify-between items-center shadow-lg">
                <Link className="logo text-2xl font-bold" to="/">Cherry</Link>
                <div className="nav-menu flex space-x-4">
                    <Link className="nav-menu-item hover:text-pink-200 transition duration-300" to="/shop">
                        Shop
                    </Link>
                    <Link className="nav-menu-item hover:text-pink-200 transition duration-300" to="/about">
                        About
                    </Link>
                    <Link className="nav-menu-item hover:text-pink-200 transition duration-300" to="/contact">
                        Contact
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;