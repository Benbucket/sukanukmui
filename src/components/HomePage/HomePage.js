// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../Hero';
import Carousel from '../Carousel';
import Layout from '../Layout';
import './HomePage.css';

const HomePage = () => {
    return (
    <Layout>
      <div className="homepage">
        <main>
          <Hero />
          <Carousel />
        </main>
      </div>
    </Layout>
    );
  };
  
  export default HomePage;





