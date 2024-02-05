import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import Blog from './Pages/Blog/Blog';
import SingleBlog from './Pages/Blog/Blog';
import Services from './Pages/Services/Services';
import SingleService from './Pages/SingleService/SingleService';
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/single_blog" element={<SingleBlog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/single_service" element={<SingleService />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
