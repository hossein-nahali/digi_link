import React, {useContext, useEffect, useState} from "react"
import './ImageSlider.scss'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss'
import ContextSingleProduct from "../../../context/context";

export default function ImageSlider() {
    const context = useContext(ContextSingleProduct).state.infoProduct;
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (context.img.length)
            setImages(context.img)
    }, [context.img]);

    return (
        images.length &&
        <Swiper
            dir="rtl"
            spaceBetween={0}
            slidesPerView={1}
            effect={'fade'}
        >
            {
                images.filter(img => {
                    return img.is_show;
                }).map((obj) => {
                    return <SwiperSlide key={obj.id}>
                        <img src={obj.src} alt="img" className={'w-100'}/>
                    </SwiperSlide>
                })
            }
        </Swiper>
    )
}