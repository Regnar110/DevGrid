import React, { useEffect, useState } from 'react'
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

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
    <div className='tech_stack relative my-5 md:my-10 lg::my-28 max-w-[1536px] flex flex-col font-roboto text-[20px] items-center justify-center'>
        <p className='tech-stack-header text-[18px]  md:text-[20px] lg:text-[25px] xl:text-[30px] font-bold text-center text-[#444548] px-5 md:px-0 mb-5'>We use only the latest tools and technologies</p>
        <p className='tech-header-underP text-[#444548] text-[11px] md:text-[13px] lg:text-[15px] xl:text-[17px] text-center  px-5 md:px-0'>used also by <span className='text-[#DE0913] font-bold'>NETFLIX</span>, <span className='text-[#1974EC] font-bold'>FACEBOOK</span>, <span className='font-bold text-black'>UBER</span> and other global giants.</p>
        {/* <div className='techs w-full gap-8 my-8'>
            <MediaQuery minWidth={1024}>
                <div className='techstack grid grid-cols-4 2xl:grid-cols-6 w-full items-center justify-items-center'>
                <Image  src={html} alt="tech"/>
                <Image  src={css} alt="tech"/>
                <Image  src={js} alt="tech"/>
                <Image  src={ts} alt="tech"/>
                <Image  src={react} alt="tech"/>
                <Image  src={next} alt="tech"/>
                <Image  src={redux} alt="tech"/>
                <Image  src={form} alt="tech"/>
                <Image  src={tailwind} alt="tech"/>
                <Image  src={mui} alt="tech"/>
                <Image  src={sanity} alt="tech"/>
                <Image  src={mongo} alt="tech"/>
                </div>            
            </MediaQuery>
            <MediaQuery maxWidth={1023}>
            <Swiper className="mySwiper">
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
            </MediaQuery>            
        </div> */}
        <div className='swipper_outer_wrapper relative w-full'>
            <Swiper 
            className="mySwiper"
            autoplay={{
                delay:1500,
                disableOnInteraction: false
            }}
            breakpoints={{
                700: {
                    width: 400
                }
            }}
            // modules={[Autoplay]}
            centeredSlides={true}
            loop={true}
            >
                <SwiperSlide className='w-fit flex justify-center items-center'><div className='h-[200px] w-fit flex justify-center items-center'><Image width={150} src={html} alt="tech"/></div></SwiperSlide>
                <SwiperSlide className='w-fit flex justify-center items-center'><div className='h-[200px] w-fit flex justify-center items-center'><Image width={150} src={css} alt="tech"/></div></SwiperSlide>
                <SwiperSlide className='w-fit flex justify-center items-center'><div className='h-[200px] w-fit flex justify-center items-center'><Image width={150} src={js} alt="tech"/></div></SwiperSlide>
                <SwiperSlide className='w-fit flex justify-center items-center'><div className='h-[200px] w-fit flex justify-center items-center'><Image width={150} src={ts} alt="tech"/></div></SwiperSlide>
                <SwiperSlide className='w-fit flex justify-center items-center'><div className='h-[200px] w-fit flex justify-center items-center'><Image width={150} src={react} alt="tech"/></div></SwiperSlide>
                <SwiperSlide className='w-fit flex justify-center items-center'><div className='h-[200px] w-fit flex justify-center items-center'><Image width={150} src={next} alt="tech"/></div></SwiperSlide>
                <SwiperSlide className='w-fit flex justify-center items-center'><div className='h-[200px] w-fit flex justify-center items-center'><Image width={150} src={redux} alt="tech"/></div></SwiperSlide>
                <SwiperSlide className='w-fit flex justify-center items-center'><div className='h-[200px] w-fit flex justify-center items-center'><Image width={150} src={form} alt="tech"/></div></SwiperSlide>
                <SwiperSlide className='w-fit flex justify-center items-center'><div className='h-[200px] w-fit flex justify-center items-center'><Image width={150} src={tailwind} alt="tech"/></div></SwiperSlide>
                <SwiperSlide className='w-fit flex justify-center items-center'><div className='h-[200px] w-fit flex justify-center items-center'><Image width={150} src={mui} alt="tech"/></div></SwiperSlide>
                <SwiperSlide className='w-fit flex justify-center items-center'><div className='h-[200px] w-fit flex justify-center items-center'><Image width={150} src={sanity} alt="tech"/></div></SwiperSlide>
                <SwiperSlide className='w-fit flex justify-center items-center'><div className='h-[200px] w-fit flex justify-center items-center'><Image width={150} src={mongo} alt="tech"/></div></SwiperSlide>
            </Swiper>            
        </div>

        <Benefits/>
    </div>

  : null
}

export default Technologies
