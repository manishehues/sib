import React, {useState} from 'react';
import NavBar from './NavBar';
import {Link} from 'react-router-dom';

function Header(){

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
   
    return(
        <>
        
            <header className={state ?"stickyHeader siteHeader mainGap container-fluid gy-5":" siteHeader mainGap container-fluid gy-5"} id="siteHeader">
                <div className="row g-0 align-items-center">
                    <div className="col text-start">
                        <div className="siteLogo">
                            <Link to="./">
                                <img className="white" src ="images/logo-white.svg" alt="Sisters In The Brotherhood" />
                                <img className="blue" src ="images/logo-blue.svg" alt="Sisters In The Brotherhood" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-10 siteMenu text-end ">
                        <NavBar />                    
                    </div>
                </div>
            </header>        
        </>
    )
}

export default Header;