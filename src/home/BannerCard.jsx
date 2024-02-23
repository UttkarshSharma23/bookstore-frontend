import React,{useRef,useState} from 'react'
// import swiper react components
import {Swiper,SwiperSlide} from "swiper/react"
// import Swiper Styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './BannerCard.css'

import {EffectCards} from 'swiper/modules';

const BannerCard = () => {
  return (
    <div className='banner'>
        <Swiper effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper">
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
        </Swiper>
    </div>
  )
}

export default BannerCard