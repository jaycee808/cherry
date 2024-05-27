import React from 'react'
import { Outlet } from 'react-router-dom'

function Home() {
    return (
        <div>
            <Outlet />
            <div>
                Home Route Page
            </div>
        </div>
    );
}

export default Home;