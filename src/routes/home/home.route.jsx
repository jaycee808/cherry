import React from 'react'
import { Outlet } from 'react-router-dom'

function Home() {

    return (
        <div>
            <Outlet />
            <div className="product-display">
                <div className="product-category">
                    <h2>Lips</h2>
                    <button>Shop Now</button>
                </div>
                <div className="product-category">
                    <h2>Eyes</h2>
                    <button>Shop Now</button>
                </div>
            </div>
        </div>
    );
}

export default Home;