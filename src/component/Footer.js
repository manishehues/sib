import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion, useAnimation } from 'framer-motion';
import {useInView} from 'react-intersection-observer';

function Footer(){
    const {ref: becomeRef, inView: becomeIsVisible } = useInView({ triggerOnce: true , threshold: 0.1});        
   
    return(
        <>
            <section ref={becomeRef} className="container-fluid section mainGap becomeMember mainGap bgPattern">
                <div className="row">
                    <div className="col-12">
                        <h1 className={`bigTitle animate__animated ${becomeIsVisible ? 'animate__fadeInLeft' : ''}`}>
                            <a href="">
                                Become a <br />
                                <span className="accColor">Member <svg xmlns="http://www.w3.org/2000/svg" width="181" height="119" viewBox="0 0 181 119" fill="none"><path d="M0.583328 50.85H158.833V68.4334H0.583328V50.85Z" fill="#FEB913"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M180.059 61.0721L121.015 118.684L108.735 106.099L155.191 60.7705L108.584 13.0334L121.166 0.75L180.059 61.0721Z" fill="#FEB913"></path></svg></span>
                            </a>
                        </h1>
                        <h5 className={`accColor mt-4 animate__animated ${becomeIsVisible ? 'animate__fadeInUp' : ''}`}>If you are looking for a career and want to become a true professional, <br />consider becoming a member of the UBC</h5>
                        <div className={`btnWrap mt-5 animate__animated ${becomeIsVisible ? 'animate__fadeInUp' : ''}`}>
                            <a href className="btn btn-primary slide-hover d-inline">
                                <span className="btnText">Become A Member </span>
                            </a>
                            <a href className="btn btn-simple d-inline ms-5">
                                <span className="btnText">contact a local representative</span>
                                <span className="btnIcon"><BsArrowRight /></span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>            
            <footer id="siteFooter" className="container-fluid siteFooter pb-5 section mainGap becomeMember mainGap">
                <div className="row g-0 upper">
                    <div className="col-sm-5 footerLogo first wow fadeIn">
                        <a href=""><img src="images/footer-logo.svg" width="250px" alt="" /></a>
                    </div>
                    <div className="col-sm-5 footerMenu second wow fadeIn">
                        <ul>
                            <li><a href="">Sisters Missions</a></li>
                            <li><a href="">Career Connections</a></li>
                            <li><a href="">Working With Us</a></li>
                            <li><a href="">About Us</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-2 footerMenu wow fadeIn">
                        <ul>
                            <li><a href="">News & Events</a></li>
                            <li><a href="">Resources</a></li>
                            <li><a href="">FR</a></li>                            
                        </ul>
                    </div>
                </div>
                <div className="row g-0  bottom mt-5 copyright border-top wow fadeIn">
                    <div className="col left text-light py-4">
                        <p style={{margin:"0"}}>Copyright © 2022 Sisters In The Brotherhood.</p>
                    </div>
                    <div className="col socialMediaMenu py-4">
                        <ul className="float-end">
                            <li><a href=""><FaFacebookF /></a></li>
                            <li><a href=""><FaTwitter /></a></li>
                            <li><a href=""><FaInstagram /></a></li>
                            <li><a href=""><FaLinkedinIn /></a></li>
                        </ul>                        
                    </div>
                </div>
            </footer>                 
        </>
    )
}

export default Footer;