import '../styles/landingPage.scss';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

function Landing() {

  return (
    <>
        <div className="hero">
            <div className="hero-img">
                <img src="/up.svg" alt="" />
            </div>
            <div className="hero-info">
                <h1>level up your business</h1>
                <p>hire the best in class to help your business grow and reach more audience</p>
                <a className='mainBtn' href="">contact</a>
            </div>
        </div>
        <div className="services">
            <div className="services-info">
                <h1>Our Services.</h1>
                <p>Simply dummy text of the printing and typesetting industry.</p>
            </div>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                style={{
                    "--swiper-pagination-color": "#8EA7E9",

                }}
            >
                <SwiperSlide>
                    <div className="service">
                        <i class="fa-solid fa-code"></i>
                        <h1>developers</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="service">
                    <i className="fa-solid fa-chart-line"></i>
                        <h1>data</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="service">
                    <i className="fa-solid fa-screwdriver-wrench"></i>
                        <h1>repair</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="service">
                    <i className="fa-regular fa-calendar-check"></i>
                        <h1>time management</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </>
  )
}

export default Landing
