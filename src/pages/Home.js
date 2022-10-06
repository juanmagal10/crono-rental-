import React, { useState } from 'react';
import Carousel from '../components/Body/Carousel';
import About from '../components/About/About';
import Trabajos from '../components/Trabajos/Trabajos';
import './Home.css';
import { images } from '../assets';

const Home = () => {
  return (
    <main className="container">
      <Carousel images={images} />
      <About />
      <Trabajos/>
    </main>
  );
};

export default Home;
