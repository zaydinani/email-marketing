import '../styles/landingPage.scss';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

function Landing() {
  const breakpoints = {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
    return (
        <>
            <Element name='hero' className="hero">
                <div className="hero-img">
                    <img src="/up.svg" alt="" />
                </div>
                <div className="hero-info">
                    <h1>level up your business</h1>
                    <p>hire the best in class to help your business grow and reach more audience</p>
                    <Link 
                        className='mainBtn'
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        offset={0}
                    >contact
                    </Link>
                </div>
            </Element>
            <Element name='services' className="services">
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
                    breakpoints={breakpoints}

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
            </Element>
            <Element className="features">
                <div className="features-content">
                    <div className="title">
                        <h1>our features</h1>
                        <p>Simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="feature">
                        <i class="fa-solid fa-gears"></i>
                        <h1>Technical Solutions</h1>
                        <p>The page to let us know how we can make it even better.</p>
                    </div>
                    <div className="feature">
                    <i class="fa-regular fa-circle-check"></i>
                        <h1>Unlimited Features</h1>
                        <p>The page to let us know how we can make it even better.</p>
                    </div>
                </div>
                <div className="feature-img">
                    <img src="developer.svg" alt="" />
                </div>
            </Element>
            <Element className="features second">
                <div className="features-content">
                    <div className="title">
                        <h1>our features</h1>
                        <p>Simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="feature">
                    <i class="fa-solid fa-hourglass"></i>
                        <h1>quick and efficient</h1>
                        <p>The page to let us know how we can make it even better.</p>
                    </div>
                    <div className="feature">
                    <i class="fa-solid fa-users-line"></i>
                        <h1>reach more audience</h1>
                        <p>The page to let us know how we can make it even better.</p>
                    </div>
                </div>
                <div className="feature-img">
                    <img src="team.svg" alt="" />
                </div>
            </Element>
            <Element name='projects' className="portfolio">
                <div className="portfolio-text">
                    <h1>our portfolio</h1>
                    <p>Simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="projects">
                    <div className="project">
                        <img src="/zayd.jpg" alt="" />
                        <p>project A</p>
                    </div>
                    <div className="project">
                        <img src="/zayd.jpg" alt="" />
                        <p>project A</p>
                    </div>
                    <div className="project">
                        <img src="/zayd.jpg" alt="" />
                        <p>project A</p>
                    </div>
                    <div className="project">
                        <img src="/zayd.jpg" alt="" />
                        <p>project A</p>
                    </div>
                    <div className="project">
                        <img src="/zayd.jpg" alt="" />
                        <p>project A</p>
                    </div>
                    <div className="project">
                        <img src="/zayd.jpg" alt="" />
                        <p>project A</p>
                    </div>
                    <div className="project">
                        <img src="/zayd.jpg" alt="" />
                        <p>project A</p>
                    </div>
                    <div className="project">
                        <img src="/zayd.jpg" alt="" />
                        <p>project A</p>
                    </div>
                </div>
            </Element>
            <Element className="newsletter">
                <div className="newsletter-text">
                    <h1>Subscribe to our newsletter.</h1>
                    <p>Simply dummy text of the printing and typesetting industry.</p>
                </div>
                <form action="">
                    <input type="text" placeholder='enter your Email address'/>
                    <button className='mainBtn'>subscribe</button>
                </form>
            </Element>
            <Element className="team-container">
                <div className="team-text">
                    <h1>our team.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                </div>
                <div className="team">
                    <div className="member">
                        <div className="member-img">
                            <img src="zayd.jpg" alt="" />
                        </div>
                        <div className="member-info">
                            <h1>zayd inani</h1>
                            <p>web developer</p>
                        </div>
                        <div className="socials">
                            <i class="fa-brands fa-linkedin"></i>
                            <i class="fa-brands fa-square-instagram"></i>
                            <i class="fa-brands fa-square-facebook"></i>
                            <i class="fa-brands fa-x-twitter"></i>
                        </div>
                    </div>
                    <div className="member">
                        <div className="member-img">
                            <img src="zayd.jpg" alt="" />
                        </div>
                        <div className="member-info">
                            <h1>zayd inani</h1>
                            <p>web developer</p>
                        </div>
                        <div className="socials">
                            <i class="fa-brands fa-linkedin"></i>
                            <i class="fa-brands fa-square-instagram"></i>
                            <i class="fa-brands fa-square-facebook"></i>
                            <i class="fa-brands fa-x-twitter"></i>
                        </div>
                    </div>
                    <div className="member">
                        <div className="member-img">
                            <img src="zayd.jpg" alt="" />
                        </div>
                        <div className="member-info">
                            <h1>zayd inani</h1>
                            <p>web developer</p>
                        </div>
                        <div className="socials">
                            <i class="fa-brands fa-linkedin"></i>
                            <i class="fa-brands fa-square-instagram"></i>
                            <i class="fa-brands fa-square-facebook"></i>
                            <i class="fa-brands fa-x-twitter"></i>
                        </div>
                    </div>
                    <div className="member">
                        <div className="member-img">
                            <img src="zayd.jpg" alt="" />
                        </div>
                        <div className="member-info">
                            <h1>zayd inani</h1>
                            <p>web developer</p>
                        </div>
                        <div className="socials">
                            <i class="fa-brands fa-linkedin"></i>
                            <i class="fa-brands fa-square-instagram"></i>
                            <i class="fa-brands fa-square-facebook"></i>
                            <i class="fa-brands fa-x-twitter"></i>
                        </div>
                    </div>
                </div>
            </Element>
            <Element name='contact' className="contact-container">
                <div className="contact-text">
                    <h1>contact us.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                </div>
                <div className="contact">
                    <div className="contact-info">
                        <div className="info">
                            <i class="fa-solid fa-phone"></i>
                            <h3>call us</h3>
                            <p>0264649994</p>
                        </div>
                        <div className="info">
                        <i class="fa-regular fa-envelope"></i>
                            <h3>email us</h3>
                            <p>wow@ggmail.com</p>
                        </div>
                        <div className="info">
                        <i class="fa-solid fa-location-dot"></i>
                            <h3>visit us</h3>
                            <p>aawfwf df wefe</p>
                        </div>
                    </div>
                    <form action="">
                        <div className="name">
                            <input type="text"  placeholder='first name'/>
                            <input type="text"  placeholder='last name'/>
                        </div>
                        <div className="textarea">
                            <input type="email" placeholder='your email'/>
                            <textarea name="" id="" cols="30" rows="10">your message here</textarea>
                        </div>
                        <button className='mainBtn'>send message</button>
                    </form>

                </div>
            </Element>
        </>
    )
}

export default Landing
