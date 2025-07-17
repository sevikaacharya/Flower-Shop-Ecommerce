import React from 'react'
import flowers from '/src/photo.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
export const Work = () => {
  return (
    <>
     <div className='mt-20 '>
        <p className='text-5xl text-center font-bold mb-7 heading'>Our Work</p>
        <div className='h-120 w-full flex flex-wrap justify-self-center '>
           <Swiper
            modules={[Autoplay]} 
            spaceBetween={10} 
            loop={true} 
            autoplay={{ delay: 2500 }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
             className='w-full'>
         
                {flowers.map((data)=>
                (
                     <SwiperSlide key={data.id}><img src={data.img} alt="img"  className=' w-80 h-110 object-cover mx-auto' /></SwiperSlide>
                    
                ))}
      
            </Swiper>
       </div>
     </div>
     <p className='text-center text-3xl caption'>"Take a stroll through our blooming work!"</p>
    </>
  )
}
