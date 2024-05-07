import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {motion} from "framer-motion";
import './NavBar.css';
import logo from '../../assets/logo-r.png';
import {Link} from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faRectangleList } from '@fortawesome/free-solid-svg-icons';
import Button from '../UI/ModifiedButton';
import dropDownIcon from "../../assets/arrow-down-sign-to-navigate.ico";

const Backdrop = (props) =>{
  return(
    <div onTouchMove={props.onConfirm} onClick={props.onConfirm} className='backdrop' style={{display: `${props.showMenu===true ? "flex" : "none"}`}}/>
  );
}

const NavBar = () => {
  const [showMenu, setShowMenu] =  useState(false);

  const showMenuHandler = (event) =>{
    setShowMenu(!showMenu);
    console.log(showMenu)
  }

  return (
    <motion.nav 
      className='nav-bar' 
      animate={showMenu ? "open":"closed"}
    >
        <img className='logo' src={logo} alt='logo'/>
        <div className="desktop-menu-horizontal" onClick={()=>setShowMenu(false)}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  className='desktop-menu-horizontal-list-item home-link' data-text='Home' onClick={()=>setShowMenu(false)}>
              <FontAwesomeIcon icon={faHome}/>
            </Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className='desktop-menu-horizontal-list-item about-link' onClick={()=>setShowMenu(false)}>
              <FontAwesomeIcon icon={faUser}/>
            </Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-80} duration={500} className='desktop-menu-horizontal-list-item projects-link' onClick={()=>setShowMenu(false)}>
              <FontAwesomeIcon icon={faRectangleList}/>
            </Link>
            {/* <Link className='desktop-menu-horizontal-list-item recommendations-link'>
              <FontAwesomeIcon icon={faComments}/>
            </Link> */}
            {/* <Link className='desktop-menu-horizontal-list-item contact-link'>
              <FontAwesomeIcon icon={faEnvelope}/>
            </Link> */}
            {/* <Link className='desktop-menu-horizontal-list-item dropdown-link'>
              <FontAwesomeIcon icon={faGlobe}/>
            </Link> */}
        </div>
        
          <div className={`${showMenu===true ? "dropdown dropdown-go-below" : "dropdown"}`} >
            <div className='dropdown-bg' onClick={showMenuHandler}>
              <motion.img variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 }
              }} src={dropDownIcon} alt="dropdown" className='dropdown-icon'/>
            </div>
          </div>
          <motion.div 
          className={`${showMenu===true ? "desktop-menu-vertical desktop-menu-vertical-mob-view" : "desktop-menu-vertical"}`} 
          onClick={()=>setShowMenu(false)}
          >
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  className='desktop-menu-vertical-list-item home-link' data-text='Home' onClick={()=>setShowMenu(false)}>
              <FontAwesomeIcon icon={faHome}/>
            </Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className='desktop-menu-vertical-list-item about-link' onClick={()=>setShowMenu(false)}>
              <FontAwesomeIcon icon={faUser}/>
            </Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-80} duration={500} className='desktop-menu-vertical-list-item projects-link' onClick={()=>setShowMenu(false)}>
              <FontAwesomeIcon icon={faRectangleList}/>
            </Link>
            {/* <Link className='desktop-menu-vertical-list-item recommendations-link'>
              <FontAwesomeIcon icon={faComments}/>
            </Link> */}
            {/* <Link className='desktop-menu-vertical-list-item contact-link'>
              <FontAwesomeIcon icon={faEnvelope}/>
            </Link> */}
            {/* <Link className='desktop-menu-vertical-list-item dropdown-link'>
              <FontAwesomeIcon icon={faGlobe}/>
            </Link> */}
        </motion.div>
        {ReactDOM.createPortal(<Backdrop onConfirm={()=>setShowMenu(false)} showMenu={showMenu}/>, document.getElementById("backdrop-root"))}
        
        <Link activeClass='active' to='contact-page' spy={true} smooth={true} offset={-50} duration={500} className='contact-button'>
            <Button>Contact Me</Button>
        </Link>
    </motion.nav>
  );
}

export default NavBar
