import React, { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const Navigation = () => {
    const { cart } = useContext(CartContext);

    return (
        <Fragment>
            <div className="navbar">
                <Link className="logo" to="/">Cherry</Link>
                <div className="nav-menu">
                    <Link className="nav-menu-item" to="/shop">
                        Shop
                    </Link>
                    <Link className="nav-menu-item" to="/about">
                        About
                    </Link>
                    <Link className="nav-menu-item" to="/contact">
                        Contact
                    </Link>
                    <Link className="nav-menu-item" to="/cart">
                        Cart ({cart.length})
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;