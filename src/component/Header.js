import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import {Link, NavLink} from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react'
import { motion } from 'framer-motion';
import $ from "jquery";



function Header(){   

    const [isOpen, setOpen] = useState(false);
    const [state, setstate] = useState(false);
    const changeClass=()=>{
        const scrollValue=document.documentElement.scrollTop;
        if(scrollValue>100)
        {
        setstate(true);
        }
        else{
        setstate(false);
        }        
        
    }
    window.addEventListener('scroll', changeClass);
    const closeSideBar = () => {
        setOpen(false)        
    }
    //const [showMenu, setShowMenu] = useState(false);
    //const [isActive, setActive] = useState("false");
    // const handleToggle = () => {
    //     isOpen(!isOpen);  };    
    useEffect(() => {        
        $(".menu-item > a").click(function(){
            $(".mainMenu").removeClass("active");
        });
    });
    
   
    return(
        <>
        
            <header className={` ${state ?"stickyHeader siteHeader mainGap container-fluid gy-5":" siteHeader mainGap container-fluid gy-5"} `} id="siteHeader">
                <div className="row g-0 align-items-center">
                    <div className="col text-start">
                        <div className={`siteLogo ${isOpen ? "active" : ''}`}>
                            <Link to="./" onClick={closeSideBar}>
                                <img className="white" src ="images/logo-white.svg" alt="Sisters In The Brotherhood" />
                                <img className="blue" src ="images/logo-blue.svg" alt="Sisters In The Brotherhood" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-10 d-flex justify-content-end text-light siteMenu text-end ">
                        <motion.div className={`mainMenu ${isOpen ? "active" : ''}`} >
                            <div className="mainNavigation">
                                {/* <div className="overlay"></div>             */}
                                <nav className="navBar">                                    
                                <ul>                        
                                    <li className="menu-item"><NavLink to='/about' onClick={closeSideBar}>About</NavLink></li>
                                    <li className="menu-item"><NavLink to='/resources' onClick={closeSideBar}>Resources</NavLink></li>
                                    <li className="menu-item"><NavLink to='/news' onClick={closeSideBar}>News</NavLink></li>
                                    <li className="menu-item"><NavLink to='/member' onClick={closeSideBar}>Member</NavLink></li>
                                    <li className="menu-item"><NavLink to='/contact' onClick={closeSideBar}>Contact</NavLink></li>
                                </ul>
                                </nav>            
                            </div>                            
                        </motion.div>                    
                        
                        <Hamburger rounded distance="sm" size={40} className="float-end" toggled={isOpen} toggle={setOpen} />
                    </div>
                </div>
            </header>        
        </>
    )
}

export default Header;