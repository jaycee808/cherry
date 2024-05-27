import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Fragment } from 'react'

const Navigation = () => {
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
                    </div>
            </div>
        <Outlet />
        </Fragment>
    )
}

export default Navigation