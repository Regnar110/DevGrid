import React, { useEffect, useState } from 'react'
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import MediaQuery from 'react-responsive';

import html from '../../public/tech/html.png'
import css from '../../public/tech/css.jpg'
import js from '../../public/tech/js.png'
import ts from '../../public/tech/typescript.png'
import react from '../../public/tech/react.png'
import next from '../../public/tech/next.png'
import redux from '../../public/tech/redux.png'
import form from '../../public/tech/reactform.jpg'
import tailwind from '../../public/tech/tailwind.jpg'
import mui from '../../public/tech/mui.png'
import sanity from '../../public/tech/sanity.png'
import mongo from '../../public/tech/mongodb.png'

const Technologies = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false)
    useEffect(() => {
        setIsMounted(true)
    })
  return isMounted ?
    <>
        <MediaQuery minWidth={1024}>
            <div className='techstack grid grid-cols-4 w-full items-center justify-items-center'>
            <Image width={200} src={html} alt="tech"/>
            <Image width={200} src={css} alt="tech"/>
            <Image width={200} src={js} alt="tech"/>
            <Image width={200} src={ts} alt="tech"/>
            <Image width={200} src={react} alt="tech"/>
            <Image width={200} src={next} alt="tech"/>
            <Image width={200} src={redux} alt="tech"/>
            <Image width={200} src={form} alt="tech"/>
            <Image width={200} src={tailwind} alt="tech"/>
            <Image width={200} src={mui} alt="tech"/>
            <Image width={200} src={sanity} alt="tech"/>
            <Image width={200} src={mongo} alt="tech"/>
            </div>            
        </MediaQuery>
        <MediaQuery maxWidth={1023}>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className='mywiper w-full h-[200px] '
            >
                <SwiperSlide className='flex justify-center items-center h-full w-full'><div className='h-full w-full flex justify-center items-center'><Image width={200} src={css} alt="tech"/></div></SwiperSlide>
                <SwiperSlide><Image width={200} src={js} alt="tech"/></SwiperSlide>
                <SwiperSlide><Image width={200} src={ts} alt="tech"/></SwiperSlide>
                <SwiperSlide><Image width={200} src={react} alt="tech"/></SwiperSlide>
                <SwiperSlide><Image width={200} src={next} alt="tech"/></SwiperSlide>
                <SwiperSlide><Image width={200} src={redux} alt="tech"/></SwiperSlide>
                <SwiperSlide><Image width={200} src={form} alt="tech"/></SwiperSlide>
                <SwiperSlide><Image width={200} src={tailwind} alt="tech"/></SwiperSlide>
                <SwiperSlide><Image style={{objectFit:"contain"}} width={200} src={mui} alt="tech"/></SwiperSlide>
                <SwiperSlide><Image width={200} src={sanity} alt="tech"/></SwiperSlide>
                <SwiperSlide><Image width={200} src={mongo} alt="tech"/></SwiperSlide>

            </Swiper>
        </MediaQuery>
    </>

  : null
}

export default Technologies
