import React from "react"
import './ImageSlider.scss'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss'

export default function ImageSlider({imageList}) {

    let test = imageList.filter(img => {
        return img.is_show;
    }).map((obj) => <SwiperSlide key={obj.id}><img
        src={obj.src} alt="img"/>
    </SwiperSlide>)


    return (
        <Swiper
            dir="rtl"
            spaceBetween={0}
            slidesPerView={1}>
            {test}
        </Swiper>
    )
}