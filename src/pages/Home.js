import React from "react";
import { BiPlayCircle } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { IoMdQuote } from "react-icons/io";
import { RiExternalLinkFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';
import { motion, useAnimation } from 'framer-motion';
import {useInView} from 'react-intersection-observer';





function Home(){ 

    const {ref: myRef, inView: myElementIsVisible } = useInView({ triggerOnce: true});
    const {ref: successRef, inView: successIsVisible } = useInView({ triggerOnce: true, threshold: 0.1});
    const {ref: featRef, inView: featIsVisible } = useInView({ triggerOnce: true, threshold: 0.1});
    const {ref: swipeRef, inView: swipeIsVisible } = useInView({ triggerOnce: true, threshold: 0.1});
    const {ref: quoteTitleRef, inView: quoteTitleIsVisible } = useInView({ triggerOnce: true, threshold: 0.1});
          
    return(
        <motion.div
            initial={{opacity: 0, transition: {duration : 0.1}}}
            animate={{opacity: 1, transition: {duration : 0.1}}}
            exit={{opacity: 0, transition: {duration : 0.1} }}
        >
            <section ref={myRef} id="heroBanner" className="container-fluid section d-flex align-items-end heroBanner fullHeight mainGap">                        
                <div className="row g-0 heroAreaContent ">
                    <div className={`col-9 text-left text-light animate__animated ${myElementIsVisible ? 'animate__fadeInUp ' : ''}`}>
                            <h3 className="pageTitle">
                                We are a team of highly skilled professionals
                            </h3>                        
                            <div className="btnWrap">
                                <a href className="btn btn-primary slide-hover">
                                    <span className="btnText">Play Video</span>
                                    <span className="btnIcon fs-3"><BiPlayCircle /></span>
                                </a>
                            </div>                                    
                    </div>
                    <div className={`col-3 text-end animate__animated animate__slow  ${myElementIsVisible ? 'animate__zoomIn' : ''}`}>                        
                        <img src="images/UBCJA-Canadian-District.svg" alt="UBCJA Canadian District" width="316" />                        
                    </div>
                </div>
                <div className="row g-0 bgSet videoBg ">
                    <div className="col-12">
                        <video  autoplay="" muted playsinline="" loop>
                            <source src="video/video.mp4" type="video/mp4" />
                        </video>
                    </div>                
                </div>            
            </section>
            <section ref={successRef} className="container-fluid section success bgPattern blueBg mainGap">
                <div className="row g-0 justify-content-between">
                    <div className={`col-sm-6 pe-5 animate__animated ${ successIsVisible ? 'animate__fadeInLeft' : ''}`}>
                        <div className="imgWrap mb-5 Left">                            
                            <img src="images/about3.jpg" alt="" />                            
                        </div>
                        <div className="contBox text-light  " data-wow-delay="0.5s">                        
                            <h4 className="h5 mb-4">Our Sisters in the Brotherhood are critical in building a stronger, more effective UBC.</h4>
                            <p>The UBC is a diverse and inclusive Union which thousands of women play a powerful role in making the best Union in North America. The UBC is committed to providing the necessary skills, training, and resources to assist Sisters throughout their journey</p>                        
                        </div>
                        <div className="btnWrap mt-5 " data-wow-delay="0.8s">
                            <a href className="btn btn-primary slide-hover d-inline">
                                <span className="btnText">About us</span>
                            </a>
                            <a href className="btn btn-simple d-inline ms-5">
                                <span className="btnText">Mission Statment</span>
                                <span className="btnIcon"><BsArrowRight /></span>
                            </a>
                        </div>
                    </div>
                    <div className={`col-sm-6 ps-5 Right animate__animated ${successIsVisible ? 'animate__fadeInRight' : ''}`}>
                        <div className="imgWrap">
                            <img src="images/about2.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section ref={featRef} className="container-fluid section featArea bgPattern blueBg mainGap ">
                <div className="row g-0 justify-content-end relative">
                    <div className={`col-sm-3 p-5 animate__animated ${featIsVisible ? 'animate__fadeInRight' : ''}`} style={{backgroundColor:"var(--whiteColor)"}}>
                        <div className="featureWraps">
                            <div className="snglWrap Right" >
                                <div className=" featIcon"><IoCheckmarkCircleSharp /></div>
                                <div className=" featText">Unmatched Safety</div>
                            </div>
                            <div className="snglWrap Right" >
                                <div className=" featIcon"><IoCheckmarkCircleSharp /></div>
                                <div className=" featText">Reliability</div>
                            </div>
                            <div className="snglWrap Right" >
                                <div className=" featIcon"><IoCheckmarkCircleSharp /></div>
                                <div className=" featText">Respect</div>
                            </div>
                            <div className="snglWrap Right" >
                                <div className=" featIcon"><IoCheckmarkCircleSharp /></div>
                                <div className=" featText">Training</div>
                            </div>
                            <div className="snglWrap Right" >
                                <div className="featIcon"><IoCheckmarkCircleSharp /></div>
                                <div className="featText">Professionalism</div>
                            </div>
                            <div className="snglWrap Right" >
                                <div className="featIcon"><IoCheckmarkCircleSharp /></div>
                                <div className="featText">Mentorship</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-0 bgSet  no-overlay" style={{backgroundImage:"url('images/about4-scaled.jpg')", backgroundSize:"cover"}}></div>                
            </section>
            <section ref={swipeRef} className="container-fluid section pb-0 swiperSlider bgPattern blueBg ">                
                <div className="row">
                    <div className={`col-12 text-center mb-5 animate__animated ${swipeIsVisible ? 'animate__fadeInUp' : ''}`}>
                        <h2 style={{color:"var(--accColor)"}} className="">ubc career opportunities</h2>
                        <div className="btnWrap mt-4 ">
                            <a href="" className="btn btn-primary slide-hover">
                                <span className="btnText">career opportunites</span>
                            </a>
                        </div>
                    </div>                    
                    <div className={`col-12 mt-5 animate__animated ${swipeIsVisible ? 'animate__fadeIn' : '' }`}>
                        <Swiper
                            modules={[Navigation , Mousewheel]}
                            mousewheel={true}                       
                            slidesPerView={2}
                            navigation                                                                                                                  
                        >                                        
                            <SwiperSlide>
                                <img src="images/1.jpg"  />
                                <div className="contentWrap p-5 bg-light">
                                    <h4 className="">Millwrights</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="images/s2.jpg"  />
                                <div className="contentWrap p-5 bg-light">
                                    <h4 className="">Millwrights</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="images/s3.jpg" />
                                <div className="contentWrap p-5 bg-light">
                                    <h4 className="">Carpentry</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="images/s4.jpg"  />
                                <div className="contentWrap p-5 bg-light">
                                    <h4 className="">Scaffold</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="images/s5.jpg" />
                                <div className="contentWrap p-5 bg-light">
                                    <h4 className="">Interior Systems</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="images/s7.jpg" />
                                <div className="contentWrap p-5 bg-light">
                                    <h4 className="">slider-content opacity half </h4>
                                </div>
                            </SwiperSlide>                        
                            <SwiperSlide>
                                <img src="images/s8.jpg" />
                                <div className="contentWrap p-5 bg-light">
                                    <h4 className="">Floorlaying</h4>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
            <section ref={quoteTitleRef} className="container-fluid section pb-5 quoteTitle mainGap bgPattern">
                <div className="row">
                    <div className="col-12">
                        <h2 style={{color:"var(--skyBlueColor)"}} className="Left">These are women who have found a career <span style={{color:"var(--accColor)"}}>at the United <br />Brotherhood of Carpenters</span></h2>
                        <div className="btnWrap mt-4 " data-wow-delay="1s">
                            <a href="" className="btn btn-primary slide-hover">
                                <span className="btnText">UCB JOBs</span>
                                <span className="btnIcon"><RiExternalLinkFill /></span>
                            </a>
                        </div>
                    </div>
                </div>                
            </section>
            <section className="container-fluid pt-5 section mainGap allQuotes bgPattern">
                <div className="row snglQuote g-0 ">
                    <div className="col-4 quoteImg pe-4">
                        <img src="images/r1.jpg" alt="" />
                    </div>
                    <div className="col-1 quoteIcon text-center accColor">
                        <h4><IoMdQuote /></h4>                        
                    </div>
                    <div className="col-7 QuoteReview ps-4 accColor pe-5">
                        <h4>Proin ornare sem in laoreet <br />tempor, sem mi laciniatincidunt <br />felis nunc a sapien Fusce libero <br />quam lorem magna.</h4>
                        <div className="text-light mt-4">
                            <p>- Christina Smith, Local 1407 Toronto</p>
                        </div>
                    </div>
                </div>
                <div className="row snglQuote g-0 ">
                    <div className="col-4 quoteImg pe-4">
                        <img src="images/r2.jpg" alt="" />
                    </div>
                    <div className="col-1 quoteIcon text-center accColor">
                        <h4 ><IoMdQuote /></h4>                        
                    </div>
                    <div className="col-7 QuoteReview ps-4 accColor pe-5">
                        <h4>sem in laoreet tempor, sem mi <br />lacinia dolor, ac tincidunt felis <br />nunc a sapien. dolores ipsumes <br />libero quam consects.</h4>
                        <div className="text-light mt-4">
                            <p>??? Samantha Geralds, Local 1409 Thunder Bay</p>
                        </div>
                    </div>
                </div>
                <div className="row snglQuote g-0 ">
                    <div className="col-4 quoteImg pe-4">
                        <img src="images/r3.jpg" alt="" />
                    </div>
                    <div className="col-1 quoteIcon text-center accColor">
                        <h4><IoMdQuote /></h4>                        
                    </div>
                    <div className="col-7 QuoteReview ps-4 accColor pe-5">
                        <h4>laoreet tempor, sem mi lacinia <br />dolor, ac tincidunt felis nunc a <br />sapien Fusce libero quam. </h4>
                        <div className="text-light mt-4">
                            <p>- Christina Smith, Local 1407 Toronto</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container-fluid section mainGap newsEvents mainGap">
                <div className="row g-0 newsEventsTitle">
                    <div className="col-12 text-center">
                        <h2 className="">latest news & events</h2>
                        <div className="btnWrap mt-4 " data-wow-delay="0.5s">
                            <a href="" className="btn btn-primary slide-hover">
                                <span className="btnText">See All   </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 g-0 allPosts">
                    <div className="col-7 featurePost ">
                        <div className="postWrap">
                            <div className="featImg">
                                <img src="images/post1.jpg" alt="" />
                            </div>
                            <div className="contentWrap">
                                <h6> 22 Nov 2022 6:05 AM | News	</h6>
                                <h4>Quebec Regional Council???s Women???s Committee makes strides in their organization</h4>
                                <div className="btnWrap mt-4">
                                    <a href="" className="btn btn-primary slide-hover">
                                        <span className="btnText">Learn More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 pendingPosts ps-5">
                        <div className="row g-0 Right">
                            <div className="col-12 snglPost">
                                <h4>22</h4>
                                <h6>Nov 2022 5:13 AM | News</h6>
                                <h5><a href="">Quebec Regional Council???s Women???s Committee makes strides in their organization  </a></h5>
                                <div className="btnWrap float-end">
                                    <a href="" className="btn btn-simple">
                                        <BsArrowRight />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row g-0 Right"> 
                            <div className="col-12 snglPost">
                                <h3>22</h3>
                                <h6>Nov 2022 5:13 AM | News</h6>
                                <h5><a href="">Women???s Executive Network (WXN) Names 105 Outstanding Women for 2022 Canada???s Most Powerful Women: Top 100 Awards </a></h5>
                                <div className="btnWrap float-end">
                                    <a href="" className="btn btn-simple">
                                        <BsArrowRight />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row g-0 Right">
                            <div className="col-12 snglPost">
                                <h3>22</h3>
                                <h6>Nov 2022 5:13 AM | News</h6>
                                <h5><a href="">Member of Local 27, Rokhaya Gueye, awarded spot in Canada???s Most Powerful Women: Top 100  </a></h5>
                                <div className="btnWrap float-end">
                                    <a href="" className="btn btn-simple">
                                        <BsArrowRight />
                                    </a>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </section>        
        </motion.div>
    )    
}

export default Home;