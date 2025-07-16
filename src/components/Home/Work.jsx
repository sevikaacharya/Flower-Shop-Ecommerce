import React from 'react'
import flowers from '/src/photo.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
export const Work = () => {
  return (
    <>
     <div className='mt-20 '>
        <p className='text-5xl text-center font-bold mb-7 heading'>Our Work</p>
        <div className='h-120 w-350 flex flex-wrap justify-self-center '>
           <Swiper modules={[Autoplay]} spaceBetween={30} slidesPerView={4} loop={true} autoplay={{ delay: 2500 }} className=''>
         
                {flowers.map((data)=>
                (
                     <SwiperSlide key={data.id}><img src={data.img} alt="img"  className='w-88 h-110' /></SwiperSlide>
                    
                ))}
      
            </Swiper>
       </div>
     </div>
     <p className='text-center text-3xl caption'>"Take a stroll through our blooming work!"</p>
    </>
  )
}
