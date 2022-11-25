import React, { useRef, useEffect, useState } from "react";
import { BiPlayCircle } from "react-icons/bi";
import CountUp from 'react-countup';
import { motion, useAnimation } from 'framer-motion';
import {useInView} from 'react-intersection-observer';




function About(){    
    //const myRef = useRef();   
    const {ref: myRef, inView: myElementIsVisible } = useInView({ triggerOnce: true});
    const {ref: titleRef, inView: titleIsVisible } = useInView({ triggerOnce: true});    
    const {ref: countOneRef, inView: countOneIsVisible } = useInView({ triggerOnce: true});    
    const {ref: countTwoRef, inView: countTwoIsVisible } = useInView({ triggerOnce: true});    
    const {ref: hisOneRef, inView: hisOneIsVisible } = useInView({ triggerOnce: true});    
    const {ref: hisTwoRef, inView: hisTwoIsVisible } = useInView({ triggerOnce: true});    
    const {ref: hisThreeRef, inView: hisThreeIsVisible } = useInView({ triggerOnce: true});    
    const {ref: hisFourRef, inView: hisFourIsVisible } = useInView({ triggerOnce: true});    
    const {ref: hisFiveRef, inView: hisFiveIsVisible } = useInView({ triggerOnce: true});    
    const {ref: hisSixRef, inView: hisSixIsVisible } = useInView({ triggerOnce: true});    
    const {ref: hisSevenRef, inView: hisSevenIsVisible } = useInView({ triggerOnce: true});    
    //const [myElementIsVisible, setMyElementIsVisible ] = useState('options');
    //console.log('myElementIsVisible', myElementIsVisible);
    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         const entry = entries[0];
    //         setMyElementIsVisible(entry.isIntersecting);
    //         console.log('entry', entry);
    //     })
    //     observer.observe(myRef.current);
    // }, [])

    
    return(
        <motion.div
            initial={{opacity: 0, transition: {duration : 0.1}}}
            animate={{opacity: 1, transition: {duration : 0.1}}}
            exit={{opacity: 0, transition: {duration : 0.1} }}
        >
            <section ref={myRef} id="heroBanner" className="overflow-hidden container-fluid section d-flex align-items-end heroBanner fullHeight mainGap">                        
                <div className="row g-0 heroAreaContent ">
                    <div className={`col-9 text-left text-light animate__animated ${myElementIsVisible ? 'animate__fadeInUp ' : ''}`}>
                            <h3 className="pageTitle">
                                Women are the first step towards true diversity in the workforce
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
                <div className="row g-0 bgSet videoBg " style={{background: "url(images/AboutMainBanner.jpg) no-repeat", backgroundSize: "cover", backgroundPosition: "left center"}}>                                   
                </div>            
            </section>
            <section className="container-fluid section strategicGoals mainGap bgPattern">
                <div  ref={titleRef} className="row g-0">
                    <div className={`col-6 contentSide pe-5 animate__animated ${titleIsVisible ? 'animate__fadeInLeft' : ''}`}>
                        <h2 className="skyBlueColor">
                            strategic <br /><span className="accColor">Goals</span>                            
                        </h2>
                        <ul class="list-group mt-3">
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <span class="badge rounded-pill">1</span>
                                <div class="ms-4 me-auto contentWrap text-light">                                    
                                    <h5 className="accColor">Increase Representation in the Workforce</h5>
                                    <p>SIB is active in recruiting efforts and educational campaigns geared towards bringing more women into the industry.</p>
                                </div>                                
                            </li>                            
                            <li class="list-group-item d-flex justify-content-between align-items-start" >
                                <span class="badge rounded-pill">2</span>
                                <div class="ms-4 me-auto contentWrap text-light">                                    
                                    <h5 className="accColor">Increase Retention of Women in the UBC</h5>
                                    <p>Ensuring the supports and mentorship in place for active members leads to continued participation in the UBC.</p>
                                </div>                                
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start" >
                                <span class="badge rounded-pill">3</span>
                                <div class="ms-4 me-auto contentWrap text-light">                                    
                                    <h5 className="accColor">Encourage Active Participation</h5>
                                    <p>Pushing active members to be ACTIVE in the community, Union activities and political action. All with the best interests of our women members in mind.</p>
                                </div>                                
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start" >
                                <span class="badge rounded-pill">4</span>
                                <div class="ms-4 me-auto contentWrap text-light">                                    
                                    <h5 className="accColor">Push for Policies that are Beneficial to Women</h5>
                                    <p>Ensuring medical benefits geared towards women are a top priority. Pushing for changes in safety standards and equipment that have long been ignored for women.</p>
                                </div>                                
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start" >
                                <span class="badge rounded-pill">5</span>
                                <div class="ms-4 me-auto contentWrap text-light">                                    
                                    <h5 className="accColor">Close the Pay Gap</h5>
                                    <p>Making sure ALL members get the same, fair wage, regardless of gender, race, nationality, or sexual orientation.</p>
                                </div>                                
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 imgArea ">
                        <img src="images/about1.jpg" alt="Strategic Goals" className={`animate__animated skyBlueColor ${titleIsVisible ? 'animate__fadeInRight' : ''}`} />
                    </div>                                        
                </div>
                <div className="row countUp section pb-0 g-0 gap-5">
                    <div ref={countOneRef} className="col-12 snglCount  text-light">                        
                        <h3 className={`accColor countNumber animate__animated animate__delay-1s ${countOneIsVisible ? 'animate__fadeInUp ' : ''}`}>                            
                            <CountUp start={0} end={500} suffix="K" enableScrollSpy={true} scrollSpyOnce={true} />
                        </h3>
                        <h5>UBC members – making it one of North America’s largest building trades union.</h5>
                    </div>
                    <div ref={countTwoRef} className="col-12 snglCount  text-light">                        
                        <h3 className={`accColor countNumber animate__animated animate__delay-1s ${countTwoIsVisible ? 'animate__fadeInUp ' : ''}`}>                            
                            <CountUp start={0} end={140} suffix="+" enableScrollSpy={true} scrollSpyOnce={true} />
                        </h3>
                        <h5>Years of history – we lead the way in training, educating, and representing the <br />next generation of skilled construction professionals.</h5>
                    </div>
                </div>
            </section>
            <section className="container-fluid section hibHistory mainGap bg-light">                
                <div className="row g-0">
                    <div className="col-12">
                        <h2>history of sib</h2>
                    </div>
                </div>
                <div ref={hisOneRef} className="row g-0 snglHistory align-items-center">
                    <div className="col-lg-6 imgArea text-light">
                        <div className={`animate__animated ${hisOneIsVisible ? 'animate__fadeIn' : ''}`}>
                            <img src="images/aboutTimeLine1.jpg" alt="1881" className="" />
                            <h4 className="hisYears">1881</h4>
                        </div>
                    </div>
                    <div className={`col-lg-6 contArea animate__animated ${hisOneIsVisible ? 'animate__fadeInRight' : ''}`}>
                        <h6>1881</h6>
                        <h4>Peter J McGuire founds the United Brotherhood of Carpenters</h4>
                        <p>When work dried up during the 1870s depression, McGuire began to march, speak, and rouse crowds of his fellow unemployed. In August 1881, he organized a Chicago convention, where 36 carpenters from 11 U.S. cities united to form a union for carpenters, and the UBC was born. A few months later, carpenters in Hamilton, Ontario became the first Canadian UBC members, and Toronto Carpenters joined in early 1882. </p>                        
                    </div>
                </div>
                <div ref={hisTwoRef} className="row g-0 snglHistory align-items-center flex-row-reverse">
                    <div className="col-lg-6 imgArea text-light">
                        <div className={`animate__animated ${hisTwoIsVisible ? 'animate__fadeIn' : ''}`}>
                            <img src="images/aboutTimeLine3.jpg" alt="1881" />
                            <h4 className="hisYears">1935</h4>
                        </div>
                    </div>
                    <div className={`col-lg-6 contArea animate__animated ${hisTwoIsVisible ? 'animate__fadeInLeft' : ''}`}>
                        <h6>1935</h6>
                        <h4>Margaret Ellings becomes the first woman initiated into the United Brotherhood of Carpenters</h4>
                        <p>Ever since, UBC women have been strong and active members. The establishment of a women’s committee within the United Brotherhood of Carpenters is one of the most important developments in the union’s recent history.</p>                        
                    </div>
                </div>
                <div ref={hisThreeRef} className="row g-0 snglHistory align-items-center">
                    <div className="col-lg-6 imgArea text-light">
                        <div className={`animate__animated ${hisThreeIsVisible ? 'animate__fadeIn' : ''}`}>
                            <img src="images/aboutTimeLine1.jpg" alt="1881" className="" />
                            <h4 className="hisYears">1957</h4>
                        </div>
                    </div>
                    <div className={`col-lg-6 contArea animate__animated ${hisThreeIsVisible ? 'animate__fadeInRight' : ''}`}>
                        <h6>1957</h6>
                        <h4>Women in the UBC number almost 9000 strong</h4>
                        <p>The continued growth of UBC enabled women to join in and work with their brothers towards the same goal.</p>                        
                    </div>
                </div>
                <div ref={hisFourRef} className="row g-0 snglHistory align-items-center flex-row-reverse">
                    <div className="col-lg-6 imgArea text-light">
                        <div className={`animate__animated ${hisFourIsVisible ? 'animate__fadeIn' : ''}`}>
                            <img src="images/aboutTimeLine3.jpg" alt="1881" />
                            <h4 className="hisYears">1998</h4>
                        </div>
                    </div>
                    <div className={`col-lg-6 contArea animate__animated ${hisFourIsVisible ? 'animate__fadeInLeft' : ''}`}>
                        <h6>1998</h6>
                        <h4>The first local Sister in the Brotherhood committee is formed</h4>
                        <p>History is made when women come together to form the first iteration of SIB. The concept spread quickly and across North America, committees were formed to help recruit women into the UBC.</p>                        
                    </div>
                </div>
                <div ref={hisFiveRef} className="row g-0 snglHistory align-items-center">
                    <div className="col-lg-6 imgArea text-light">
                        <div className={`animate__animated ${hisFiveIsVisible ? 'animate__fadeIn' : ''}`}>
                            <img src="images/aboutTimeLine1.jpg" alt="1881" className="" />
                            <h4 className="hisYears">2002</h4>
                        </div>
                    </div>
                    <div className={`col-lg-6 contArea animate__animated ${hisFiveIsVisible ? 'animate__fadeInRight' : ''}`}>
                        <h6>2002</h6>
                        <h4>The UBC holds its first Women's Conference</h4>
                        <p>At the inaugural Women’s Conference, 250 UBC women from across the U.S. and Canada to joined for the first time in the largest conference to date at the International Training Center in Las Vegas.</p>

                        <p>The event far exceeded expectations for planners and attendees alike. Women on the brink of retirement were overwhelmed to witness an event that they didn’t believe they would see in their lifetime.</p>                        
                    </div>
                </div>
                <div ref={hisSixRef} className="row g-0 snglHistory align-items-center flex-row-reverse">
                    <div className="col-lg-6 imgArea text-light">
                        <div className={`animate__animated ${hisSixIsVisible ? 'animate__fadeIn' : ''}`}>
                            <img src="images/aboutTimeLine3.jpg" alt="1881" />
                            <h4 className="hisYears">2005 </h4>
                        </div>
                    </div>
                    <div className={`col-lg-6 contArea animate__animated ${hisSixIsVisible ? 'animate__fadeInLeft' : ''}`}>
                        <h6>2005 </h6>
                        <h4>39th General Convention</h4>
                        <p>In 2005, UBC General President Douglas McCarron appointed the first Women’s Committee in the history of the United Brotherhood of Carpenters. The group, all delegates elected from their local unions, met and drafted a report that was read to and approved by the delegate body. The report included ideas on how to increase the number of women in the UBC as well as the challenges faced by women carpenters and proposals for solving them. </p>                        
                    </div>
                </div>
                <div ref={hisSevenRef} className="row g-0 snglHistory align-items-center">
                    <div className="col-lg-6 imgArea text-light">
                        <div className={`animate__animated ${hisSevenIsVisible ? 'animate__fadeIn' : ''}`}>
                            <img src="images/aboutTimeLine1.jpg" alt="1881" className="" />
                            <h4 className="hisYears">2018  </h4>
                        </div>
                    </div>
                    <div className={`col-lg-6 contArea animate__animated ${hisSevenIsVisible ? 'animate__fadeInRight' : ''}`}>
                        <h6>2005 </h6>
                        <h4>UBC International Women’s Conference – It’s Time! </h4>
                        <p>More than 500 UBC members gathered at the International Training Center in Las Vegas for the union’s largest-ever Sisters in the Brotherhood (SIB) conference.  The theme was, It’s Time! and, from sunup to sundown, participants enthusiastically made the most of their time at the three-day event—learning, sharing, networking and communicating their hopes, ideas, questions and suggestions.</p>                        
                    </div>
                </div>
            </section>            
        </motion.div>
    )    
}

export default About;