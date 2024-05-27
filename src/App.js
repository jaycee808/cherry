import React from 'react'
import { Routes, Route } from 'react-router-dom'

// routes
import Navigation from './routes/navigation/navigation'
import Home from './routes/home/home.route'
import Shop from './routes/shop/shop.route'
import About from './routes/about/about.route'
import Contact from './routes/contact/contact.route'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path="shop" element={<Shop />}/>
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact />}/>
      </Route>
    </Routes>
  )
};

export default App;