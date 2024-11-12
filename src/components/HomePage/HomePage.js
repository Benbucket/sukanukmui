// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Hero from '../Hero';
import Carousel from '../Carousel';
import './HomePage.css';

const HomePage = () => {
    return (
      <div className="homepage">
        <Navbar />
        <main>
          <Hero />
          <Carousel />
        </main>
      </div>
    );
  };
  
  export default HomePage;





