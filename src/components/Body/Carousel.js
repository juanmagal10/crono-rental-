import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


import 'swiper/css'
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/css/effect-fade";
import "swiper/scss/navigation";
import "swiper/scss/autoplay";
import "swiper/scss/thumbs";
import './Carousel.scss'


import {Autoplay, Navigation, Thumbs } from
    "swiper";
import Products from "../../pages/Products";

const Carousel = props => {
  const [activeThumb, setActiveThumb]=useState(null)
    return (
        <>
        <Swiper
        loop={true}
        spaceBetween={0}
        modules={[Navigation, Thumbs, Autoplay]}
        grabCursor={true}
        className='swiper'
        navigation={true}
        autoplay={true}
        thumbs={{ swiper: activeThumb  && !activeThumb.destroyed ? activeThumb : null}}
        >
          {
            props.images.map((item, index) => (
            
                <SwiperSlide className="slide" key={index} id='slide'>
                  <img className="slide-content" src={item.img} alt="img" />
                  <HashLink to={`/${item.url}/#products-section`} className='button-container'><button className="button">Mas...</button></HashLink>
                </SwiperSlide>
           
            ))
          }
   
       
      </Swiper>
    
          <Swiper
          onSwiper={setActiveThumb}
          loop={true}
          spaceBetween={10}
          modules={[Navigation, Thumbs]}
          grabCursor={true}
          autoplay={true}
          className='swiper-thumbs'
          slidesPerView={3}
          >
            {
              props.images.map((item, index) => (
                <div className="swiper-container">
                  <SwiperSlide className="slide-thumb" key={index}>
                    <img className="slide-thumb-content" src={item.img} alt="img" />
                  </SwiperSlide>
                    <Link to={item.url}><button className="button">mas...</button></Link>
                </div>
              ))
            }
             
                 
                </Swiper>
        
        </>
        )
    
}

Carousel.propTypes = {
  images:PropTypes.array.isRequired
}
    
export default Carousel