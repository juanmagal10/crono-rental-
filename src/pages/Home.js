import React from 'react'
import Header from '../components/Header/Header'
import Carousel from '../components/Body/Carousel'
import { images } from '../assets'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Carousel images={images}></Carousel>
    </div>
  )
}

export default Home
