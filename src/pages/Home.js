import React from "react";
import { BiPlayCircle } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import WOW from 'wowjs';
import {useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Home(){ 
    useEffect(() => {
        new WOW.WOW().init();
    });
          
    return(
        <>
            <section id="heroBanner" className="container-fluid section d-flex align-items-end heroBanner fullHeight mainGap">                        
                <div className="row g-0 heroAreaContent ">
                    <div className="col-9 text-left text-light wow fadeInUp">
                            <h2 className="pageTitle">
                                We are a team of highly skilled professionals
                            </h2>                        
                            <div className="btnWrap">
                                <a href className="btn btn-primary slide-hover">
                                    <span className="btnText">Play Video</span>
                                    <span className="btnIcon fs-3"><BiPlayCircle /></span>
                                </a>
                            </div>                                    
                    </div>
                    <div className="col-3 text-end wow fadeIn" data-wow-delay="1s">                        
                        <img src="images/UBCJA-Canadian-District.svg" alt="UBCJA Canadian District" width="316" />                        
                    </div>
                </div>
                <div className="row g-0 bgSet videoBg">
                    <div className="col-12">
                        <video  autoplay="" muted playsinline="" loop>
                            <source src="video/video.mp4" type="video/mp4" />
                        </video>
                    </div>                
                </div>            
            </section>
            <section className="container-fluid section success bgPattern blueBg mainGap">
                <div className="row g-0 justify-content-between">
                    <div className="col-sm-6 pe-5">
                        <div className="imgWrap mb-5 wow fadeInLeft">                            
                            <img src="images/about3.jpg" alt="" />                            
                        </div>
                        <div className="contBox text-light  wow fadeIn" data-wow-delay="1s">                        
                            <h4 className="h5 mb-4">Our Sisters in the Brotherhood are critical in building a stronger, more effective UBC.</h4>
                            <p>The UBC is a diverse and inclusive Union which thousands of women play a powerful role in making the best Union in North America. The UBC is committed to providing the necessary skills, training, and resources to assist Sisters throughout their journey</p>                        
                        </div>
                        <div className="btnWrap mt-5 wow fadeIn" data-wow-delay="1.3s">
                            <a href className="btn btn-primary slide-hover d-inline">
                                <span className="btnText">About us</span>
                            </a>
                            <a href className="btn btn-simple d-inline ms-5">
                                <span className="btnText">Mission Statment</span>
                                <span className="btnIcon"><BsArrowRight /></span>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-6 ps-5 wow fadeInRight">
                        <div className="imgWrap">
                            <img src="images/about2.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="container-fluid section featArea bgPattern blueBg mainGap wow fadeIn">
                <div className="row g-0 justify-content-end relative">
                    <div className="col-sm-3 p-5  wow fadeIn" style={{backgroundColor:"var(--whiteColor)"}} data-wow-delay="0.2s">
                        <div className="featureWraps">
                            <div className="snglWrap wow fadeInRight" data-wow-delay="0.4s">
                                <div className=" featIcon"><IoCheckmarkCircleSharp /></div>
                                <div className=" featText">Unmatched Safety</div>
                            </div>
                            <div className="snglWrap wow fadeInRight" data-wow-delay="0.6s">
                                <div className=" featIcon"><IoCheckmarkCircleSharp /></div>
                                <div className=" featText">Reliability</div>
                            </div>
                            <div className="snglWrap wow fadeInRight" data-wow-delay="0.8s">
                                <div className=" featIcon"><IoCheckmarkCircleSharp /></div>
                                <div className=" featText">Respect</div>
                            </div>
                            <div className="snglWrap wow fadeInRight" data-wow-delay="1s">
                                <div className=" featIcon"><IoCheckmarkCircleSharp /></div>
                                <div className=" featText">Training</div>
                            </div>
                            <div className="snglWrap wow fadeInRight" data-wow-delay="1.2s">
                                <div className="featIcon"><IoCheckmarkCircleSharp /></div>
                                <div className="featText">Professionalism</div>
                            </div>
                            <div className="snglWrap wow fadeInRight" data-wow-delay="1.4s">
                                <div className="featIcon"><IoCheckmarkCircleSharp /></div>
                                <div className="featText">Mentorship</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-0 bgSet  no-overlay" style={{backgroundImage:"url('images/about4-scaled.jpg')", backgroundSize:"cover"}}></div>                
            </section>
            <section className="container-fluid section swiperSlider bgPattern blueBg wow fadeIn">
                <div className="row">
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={2}            
                        navigation
                        //pagination={{ clickable: true }}
                        //scrollbar={{ draggable: true }}                                  
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >                                        
                        <SwiperSlide><img src="images/s2.jpg"  /></SwiperSlide>
                        <SwiperSlide><img src="images/s3.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="images/s4.jpg"  /></SwiperSlide>
                        <SwiperSlide><img src="images/s5.jpg" /></SwiperSlide>
                        <SwiperSlide><img src="images/s7.jpg" /></SwiperSlide>                        
                    </Swiper>
                    
                </div>
            </section>        
        </>
    )    
}

export default Home;