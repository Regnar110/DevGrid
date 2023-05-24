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
import Benefits from '../Benefits/Benefits';

const Technologies = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false)
    useEffect(() => {
        setIsMounted(true)
    })
  return isMounted ?
    <div className='tech_stack relative md:my-28 w-full flex flex-col font-roboto text-[20px] items-center justify-center'>
        <p className='tech-stack-header text-[30px] font-bold text-center text-[#444548]'>We use only the latest tools and technologies</p>
        <p className='tech-header-underP text-[#444548] text-[18px] text-center'>used also by <span className='text-[#DE0913] font-bold'>NETFLIX</span>, <span className='text-[#1974EC] font-bold'>FACEBOOK</span>, <span className='font-bold text-black'>UBER</span> and other global giants.</p>
        <div className='techs w-full gap-8 my-8'>
            <MediaQuery minWidth={1024}>
                <div className='techstack grid grid-cols-4 2xl:grid-cols-6 w-full items-center justify-items-center'>
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
                    className='mywiper w-full '
                    wrapperClass='mb-10'
                >
                    <SwiperSlide><div className='h-[200px] w-full flex justify-center items-center'><Image width={200} src={css} alt="tech"/></div></SwiperSlide>
                    <SwiperSlide><div className='w-full h-[200px] flex justify-center items-center'><Image width={200} src={js} alt="tech"/></div></SwiperSlide>
                    <SwiperSlide><div className='w-full h-[200px] flex justify-center items-center'><Image width={200} src={ts} alt="tech"/></div></SwiperSlide>
                    <SwiperSlide><div className='w-full h-[200px] flex justify-center items-center'><Image width={200} src={react} alt="tech"/></div></SwiperSlide>
                    <SwiperSlide><div className='w-full h-[200px] flex justify-center items-center'><Image width={200} src={next} alt="tech"/></div></SwiperSlide>
                    <SwiperSlide><div className='w-full h-[200px] flex justify-center items-center'><Image width={200} src={redux} alt="tech"/></div></SwiperSlide>
                    <SwiperSlide><div className='w-full h-[200px] flex justify-center items-center'><Image width={200} src={form} alt="tech"/></div></SwiperSlide>
                    <SwiperSlide><div className='w-full h-[200px] flex justify-center items-center'><Image width={200} src={tailwind} alt="tech"/></div></SwiperSlide>
                    <SwiperSlide><div className='w-full h-[200px] flex justify-center items-center'><Image width={200} src={mui} alt="tech"/></div></SwiperSlide>
                    <SwiperSlide><div className='w-full h-[200px] flex justify-center items-center'><Image width={200} src={sanity} alt="tech"/></div></SwiperSlide>
                    <SwiperSlide><div className='w-full h-[200px] flex justify-center items-center'><Image width={200} src={mongo} alt="tech"/></div></SwiperSlide>

                </Swiper>
            </MediaQuery>            
        </div>

        <Benefits/>
    </div>

  : null
}

export default Technologies
