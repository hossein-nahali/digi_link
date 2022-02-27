import React from "react"
import './ImageSlider.scss'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss'

export default function ImageSlider({imageList}) {

    let test = imageList.filter(img => {
        return img.is_show;
    }).map((obj) => {
        return <SwiperSlide key={obj.id}>
            <img src={obj.src} alt="img" className={'w-100'}/>
        </SwiperSlide>
    })


    return (
        <Swiper
            dir="rtl"
            spaceBetween={0}
            slidesPerView={1}>
            {test}
        </Swiper>
    )
}