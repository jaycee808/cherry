import React from 'react';
import { Routes, Route } from 'react-router-dom'

// contexts
import CartProvider from './contexts/CartContext';

// routes
import Navigation from './routes/navigation.route';
import Home from './routes/home.route';
import Shop from './routes/shop.route';
import Cart from './routes/cart.route';
import About from './routes/about.route';
import Contact from './routes/contact.route';


function App() {
    return (
        <CartProvider>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />}/>
              <Route path="shop" element={<Shop />}/>
              <Route path="about" element={<About />}/>
              <Route path="contact" element={<Contact />}/>
              <Route path="cart" element={<Cart />}/>
            </Route>
          </Routes>
        </CartProvider>
    );
}

export default App;