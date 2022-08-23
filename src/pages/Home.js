import React from 'react';
import Header from '../components/Header/Header';
import Carousel from '../components/Body/Carousel';
import Footer from '../components/Footer/Footer';
import About from '../components/About/About';
import './Home.css'
import { images } from '../assets';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="container">

      <Carousel images={images}></Carousel>
      <About></About>
      <Footer></Footer>
      </div>
    </div>
  )
}

export default Home
