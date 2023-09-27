import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

import './styles/app.scss';
import Nav from "./components/Nav"
import Footer from "./components/Footer"
function App() {

  return (
    <>
      <Nav />
      <div className="carousel-container">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <div className="actions">
                <h3>welcome to ATECOLIFE</h3>
                <div className="btns">
                  <a href="" className="secondaryBtn">
                    learn more
                  </a>
                  <a href="" className="mainBtn">
                    get it now
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="actions">
                <h3>welcome to ATECOLIFE</h3>
                <div className="btns">
                  <a href="" className="secondaryBtn">
                    learn more
                  </a>
                  <a href="" className="mainBtn">
                    get it now
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="actions">
                <h3>welcome to ATECOLIFE</h3>
                <div className="btns">
                  <a href="" className="secondaryBtn">
                    learn more
                  </a>
                  <a href="" className="mainBtn">
                    get it now
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
      </div>
      <div className="about" >
          <h1>about us</h1>
          <h2>We work with top brands and startups</h2>
          <div className="icons">
            <div className='twos'>
              <div className="icon">
                <i className="fa-solid fa-rocket"></i>
                <p>top notch</p>
              </div>
              <div className="icon">
                <i className="fa-solid fa-rocket"></i>
                <p>top notch</p>
              </div>
            </div>
            <div className='twos'>
              <div className="icon">
                <i className="fa-solid fa-rocket"></i>
                <p>top notch</p>
              </div>
              <div className="icon">
                <i className="fa-solid fa-rocket"></i>
                <p>top notch</p>
              </div>
            </div>
          </div>
          <a href="" className="btn">learn more <i className="fa-solid fa-arrow-right"></i></a>
      </div>
      <div className="features-container">
          <div className='feature'>
            <i className="fa-solid fa-rocket"></i>
            <div className="content">
              <h3>INITIAL WORK</h3>
              <p>Proin euismod sem ut diam ultricies, ut faucibus velit ultricies. Nam eu turpis quam. Duis ac condimentum eros.</p>
              <a href="" className="btn">learn more <i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
          <div className='feature'>
            <i className="fa-solid fa-rocket"></i>
            <div className="content">
              <h3>INITIAL WORK</h3>
              <p>Proin euismod sem ut diam ultricies, ut faucibus velit ultricies. Nam eu turpis quam. Duis ac condimentum eros.</p>
              <a href="" className="btn">learn more <i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
          <div className='feature'>
            <i className="fa-solid fa-rocket"></i>
            <div className="content">
              <h3>INITIAL WORK</h3>
              <p>Proin euismod sem ut diam ultricies, ut faucibus velit ultricies. Nam eu turpis quam. Duis ac condimentum eros.</p>
              <a href="" className="btn">learn more <i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
      </div>
      <div className="newsletter">
        <div className="news-content">
          <h3>SUBSCRIBE NEWSLETTERS</h3>
          <h1>Don’t miss this chance!</h1>
          <p>Vivamus suscipit blandit nibh, in cursus mi. Proin vel blandit metus, et auctor elit. Vivamus tincidunt tristique convallis. Ut nec odio vel arcu euismod semper nec ac sem.</p>
          <form action="">
            <input type="email" placeholder='enter your email'/>
            <button>subscribe now</button>
          </form>
        </div>
      </div>
      <div className="projects-container">
        <div className="projects-info">
          <h3>our projects</h3>
          <h1>some of our latest projects</h1> 
        </div>
        <div class="row">
            <div class="example-2 card">
              <div class="wrapper">
                <div class="header">
                  <div class="date">
                    <span class="day">12</span>
                    <span class="month">Aug</span>
                    <span class="year">2016</span>
                  </div>
                </div>
                <div class="data">
                  <div class="content">
                    <span class="author">Jane Doe</span>
                    <h1 class="title"><a href="#">Stranger Things</a></h1>
                    <p class="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
                    <a href="#" class="button">Read more</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="example-2 card">
              <div class="wrapper">
                <div class="header">
                  <div class="date">
                    <span class="day">12</span>
                    <span class="month">Aug</span>
                    <span class="year">2016</span>
                  </div>
                </div>
                <div class="data">
                  <div class="content">
                    <span class="author">Jane Doe</span>
                    <h1 class="title"><a href="#">Stranger Things</a></h1>
                    <p class="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
                    <a href="#" class="button">Read more</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="example-2 card">
              <div class="wrapper">
                <div class="header">
                  <div class="date">
                    <span class="day">12</span>
                    <span class="month">Aug</span>
                    <span class="year">2016</span>
                  </div>
                </div>
                <div class="data">
                  <div class="content">
                    <span class="author">Jane Doe</span>
                    <h1 class="title"><a href="#">Stranger Things</a></h1>
                    <p class="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
                    <a href="#" class="button">Read more</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="example-2 card">
              <div class="wrapper">
                <div class="header">
                  <div class="date">
                    <span class="day">12</span>
                    <span class="month">Aug</span>
                    <span class="year">2016</span>
                  </div>
                </div>
                <div class="data">
                  <div class="content">
                    <span class="author">Jane Doe</span>
                    <h1 class="title"><a href="#">Stranger Things</a></h1>
                    <p class="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
                    <a href="#" class="button">Read more</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="example-2 card">
              <div class="wrapper">
                <div class="header">
                  <div class="date">
                    <span class="day">12</span>
                    <span class="month">Aug</span>
                    <span class="year">2016</span>
                  </div>
                </div>
                <div class="data">
                  <div class="content">
                    <span class="author">Jane Doe</span>
                    <h1 class="title"><a href="#">Stranger Things</a></h1>
                    <p class="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
                    <a href="#" class="button">Read more</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="example-2 card">
              <div class="wrapper">
                <div class="header">
                  <div class="date">
                    <span class="day">12</span>
                    <span class="month">Aug</span>
                    <span class="year">2016</span>
                  </div>
                </div>
                <div class="data">
                  <div class="content">
                    <span class="author">Jane Doe</span>
                    <h1 class="title"><a href="#">Stranger Things</a></h1>
                    <p class="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
                    <a href="#" class="button">Read more</a>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="team-container">
        <div className="team-info">
          <h3>digital team</h3>
          <h1>young and talented members</h1>
        </div>
        <div className="team">
          <div className="person">
            <div className='person-img'>
              <img src="/zayd.jpg" alt="" />
            </div>
            <div className='person-info'>
              <h3>zayd inani</h3>
              <p>digital marketer</p>
            </div>
          </div>
          <div className="person">
            <div className='person-img'>
              <img src="/zayd.jpg" alt="" />
            </div>
            <div className='person-info'>
              <h3>zayd inani</h3>
              <p>digital marketer</p>
            </div>
          </div>          <div className="person">
            <div className='person-img'>
              <img src="/zayd.jpg" alt="" />
            </div>
            <div className='person-info'>
              <h3>zayd inani</h3>
              <p>digital marketer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us">
        <div className="contact-info">
          <h3>contact us</h3>
          <h1>feel free to keep in touch with us!</h1>
          <div className="info">
            <p><i class="fa-solid fa-phone"></i> 010-020-0860</p>
            <p><i class="fa-solid fa-envelope"></i> wow@gmail.com</p>
            <p><i class="fa-solid fa-globe"></i> wow.com</p>
          </div>
        </div>
        <form action="">
          <div>
            <input type="text" placeholder='your name'/>
            <input type="text" placeholder='your phone'/>
          </div>
          <div>
            <input type="text" placeholder='your email'/>
            <input type="text" placeholder='subject'/>
          </div>
          <div>
            <textarea name="" id="" cols="30" rows="10">message</textarea>
          </div>
          <button className="btn">send message now <i className="fa-solid fa-arrow-right"></i></button>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default App
