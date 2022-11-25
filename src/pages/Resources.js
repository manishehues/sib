import React, {useState} from "react";
import { motion } from 'framer-motion';
import { BiPlayCircle } from "react-icons/bi";
import { RiExternalLinkFill, RiH5 } from "react-icons/ri";
import {useInView} from 'react-intersection-observer';
//import { MDBAccordion, MDBAccordionItem, MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
import Accordion from 'react-bootstrap/Accordion';
import { BsPlusLg, BsDashLg } from "react-icons/bs";


function About(){
    //const [showShow, setShowShow] = useState(false);
    //const toggleShow = () => setShowShow(!showShow);


    const {ref: myRef, inView: myElementIsVisible } = useInView({ triggerOnce: true});
    const {ref: resourcesRef, inView: resourcesIsVisible } = useInView({ triggerOnce: true, threshold: 0.1});
    const {ref: resourcesDataRef, inView: resourcesDataIsVisible } = useInView({ triggerOnce: true});
    return(
        <motion.div
            initial={{opacity: 0, transition: {duration : 0.1}}}
            animate={{opacity: 1, transition: {duration : 0.1}}}
            exit={{opacity: 0, transition: {duration : 0.1} }}
        >
            <section ref={myRef} id="resourcesBanner" className="overflow-hidden container-fluid section d-flex align-items-end heroBanner resourcesBanner fullHeight mainGap">
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
                <div className="row g-0 bgSet videoBg " style={{background: "url(images/resources.jpg) no-repeat", backgroundSize: "cover", backgroundPosition: "left center"}}></div>
            </section>
            <section ref={resourcesRef} className="container-fluid section pb-5 mainGap bg-light resources">
                <div className="row mb-0 g-0 align-items-end">
                    <div className="col-sm-6">
                        <h4 className={`mb-0 animate__animated ${ resourcesIsVisible ?  'animate__fadeInLeft' : ''}`}>sister resources</h4>
                    </div>
                    <div className="col-sm-6  text-end">
                        <div className={`btnWrap mt-0 animate__animated ${ resourcesIsVisible ?  'animate__fadeInRight' : ''}`}>
                            <a href className="btn btn-simple blue">
                                <span className="btnText">ubc regional committee resources</span>
                                <span className="btnIcon"><RiExternalLinkFill /></span>
                            </a>
                        </div>  
                    </div>
                </div>
                <div ref={resourcesDataRef} className="row g-0 blockArea justify-content-center">
                    <div className={`col-lg-6 imgArea animate__animated ${ resourcesDataIsVisible ?  'animate__fadeInRight' : ''}`} style={{background:"url(images/resources1.jpg) no-repeat", backgroundRepeat:"no-repeat", backgroundSize: "cover", backgroundPosition: "center center"}}> 
                    </div>
                    <div className={`col-lg-6 contArea d-flex align-items-center flex-wrap animate__animated ${ resourcesDataIsVisible ?  'animate__fadeInLeft' : ''}`}>
                        <div>
                            <h4>UBC International Sisters in the Brotherhood</h4>
                            <p>IB committees are North America-wide. Find out more about the international’s efforts in supporting its female members.</p>                        
                            <div className="btnWrap">
                                <a href className="btn btn-secondary slide-hover">
                                    <span className="btnText">Learn More</span>
                                    <span className="btnIcon "><RiExternalLinkFill /></span>
                                </a>
                            </div>
                        </div> 
                    </div>                    
                </div>                             
            </section>
            <section className="section pt-5 mainGap allAccordion bg-light">
                <div className={`row g-0 `}>
                    <div className="col-12 accoWrap">                        
                        <Accordion>
                            <Accordion.Item eventKey="0" className="snglAccordion border-top border-bottom">
                                <Accordion.Header className="d-flex">
                                    <BsPlusLg className="fs-3 plus" />
                                    <BsDashLg className="fs-3 minus" />
                                    <h5 className="mb-0">UBC International Sisters in the Brotherhood Committee Reports</h5>
                                </Accordion.Header>
                                <Accordion.Body className="row g-0 flex-row-reverse">
                                    <div className="col-md-4 imgArea">
                                        <img  src="images/simpleAccordionImg.jpg" alt="" />
                                    </div>
                                    <div className="col-md-8 pe-5">
                                        <p>The SIB newsletters contain TIPS for building a strong Sisters committee. Published on a monthly basis, the newsletter welcomes and encourages SIB Committees to share their TIPS for success! </p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non imperdiet turpis, id molestie orci. Donec tristique quam ultrices laoreet tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <p>Nam posuere purus quis lectus fermentum convallis. Curabitur sit amet mauris quis augue iaculis posuere vitae sit amet leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque porta iaculis mauris, sit amet malesuada orci dignissim id. Sed tellus leo, pellentesque in ornare eget, vehicula sed dolor. </p>
                                        <div className="btnWrap">
                                            <a href className="btn btn-primary slide-hover">
                                                <span className="btnText">Learn More</span>
                                                <span className="btnIcon"><RiExternalLinkFill /></span>
                                            </a>
                                        </div>   
                                    </div>                                        
                                </Accordion.Body>
                            </Accordion.Item>                           
                        </Accordion>
                    </div>
                </div>   
            </section>
        </motion.div>
    )    
}

export default About;