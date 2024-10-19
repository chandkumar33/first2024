import React from 'react'
import { Swiper, SwiperSlide  } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Slider/Slider.css';

import banner_img1 from '../../assets/images/1.jpg'
import banner_img2 from '../../assets/images/2.jpg'
import banner_img3 from '../../assets/images/3.jpg'
import banner_img4 from '../../assets/images/4.jpg'
import banner_img5 from '../../assets/images/5.jpg'
import banner_img6 from '../../assets/images/6.jpg'
import { Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
    <div className='p-10'>
    <div className='overflow-hidden rounded-lg md:rounded-[15px] lg:rounded-[30px]'>
    <Swiper
      spaceBetween={0}
    //   slidesPerView={1}
      pagination={{ clickable: true }}
      navigation={true}
        loop={true}
    //   pagination={true} 
      modules={[Pagination, Navigation]}
      className='mySwiper'
    >
      <SwiperSlide> <img src={banner_img2} alt="" className='w-full'   /> </SwiperSlide>
      <SwiperSlide> <img src={banner_img3} alt="" className='w-full'   /> </SwiperSlide>
      <SwiperSlide> <img src={banner_img4} alt="" className='w-full'   /> </SwiperSlide>
      <SwiperSlide> <img src={banner_img5} alt="" className='w-full'   /> </SwiperSlide>
      <SwiperSlide> <img src={banner_img6} alt="" className='w-full'   /> </SwiperSlide>
      <SwiperSlide> <img src={banner_img1} alt="" className='w-full'   /> </SwiperSlide>
    </Swiper>
    </div>
    </div>
    </>
  )
}
