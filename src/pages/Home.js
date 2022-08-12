import React from 'react';
import Header from '../components/Header/Header';
import Carousel from '../components/Body/Carousel';
import Footer from '../components/Footer/Footer';
import { images } from '../assets';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Carousel images={images}></Carousel>
      <Footer></Footer>
    </div>
  )
}

export default Home
