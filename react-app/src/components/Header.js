import React from 'react';

import logo from '../images/logo.svg';
import icon from '../images/icon.png';

const Header = () => {

  const ShowNav = (e) => {
    e.preventDefault();
    
    document.querySelector('#mobile_toggler').classList.toggle('fa-times');
    document.querySelector('.mobile_navigations').classList.toggle('active');
  }

  const ShowPub = (e) => {
    e.preventDefault();

    document.querySelector('.practice_areas').classList.toggle('show_pa');
  }

  window.onscroll = () => {
    document.querySelector('#mobile_toggler').classList.remove('fa-times')
    document.querySelector('.mobile_navigations').classList.remove('active');
    document.querySelector('.practice_areas').classList.remove('show_pa');
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
      document.querySelector('#navbar').style.opacity = 0.9;
    } else {
      document.querySelector('#navbar').style.opacity = 1;
    }
  })
  return (
    <div>
      <nav id="navbar">
        <div className="container">
          <div>
            <a href="#home"><img src={logo} className="logo" alt="HERMAKOP" /></a>
            <a href="#home"><img src={icon} className="icon" alt="HERMAKOP" /></a>
          </div>
          
          <div className="navigations">
            <ul>
              <li className="links"><a href="#showcase">Home</a></li>
              <li className="links"><a href="#about_us">About Us </a></li>
              <div className="dropdown">
                <li className="links"><a href="#practice_areas">Practice Areas</a><i onClick={ShowPub} className="fa-solid fa-sort-down link"></i></li>
                  <div className="practice_areas">
                    <ul>
                      <li>Islamic Finance And Investment / Agency Banking And Insurance</li>
                      <li>Company Secretarial / Compliance</li>
                      <li>Tax Advisory</li>
                      <li>Hermakop Publishing</li>
                      <li>Business Advisory</li>
                    </ul>
                  </div>
              </div>    
              <li className="links"><a href="#our_publications">Our Publications</a></li>
              <li className="links"><a href="#contact_us" className="btn">Contact Us</a></li>
            </ul>
          </div>

          <div id="mobile_nav">
            <div onClick={ShowNav} className="toggler">
              <i className="fa fa-bars fa-2x" id="mobile_toggler"></i>
            </div>
           
            <div className="mobile_navigations">
              <ul>
                <li className="mobile_links"><a href="#showcase">Home</a></li>
                <li className="mobile_links"><a href="#about_us">About Us</a></li>
                <li className="mobile_links"><a href="#practice_areas">Practice Areas</a></li>
                <li className="mobile_links"><a href="#our_publications">Our Publications</a></li>
                <li className="mobile_links"><a href="#contact_us">Contact Us</a></li>
              </ul>
            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;
