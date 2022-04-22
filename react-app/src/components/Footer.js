import React from 'react';
import logo from '../images/logo.svg';

const Footer = () => {
  return (
    <div>
      <footer id="contact_us" className="footer">
        <div className="container">
          <div className="list_item_1 list_item">
            <img src={logo} className="logo" alt="HERMAKOP" />    
            <p>
              Hermakop consulting deals with major soliciting 
              works that covers every aspect of legal activities 
              surrounding man's existence.
            </p>
            <div className="socials">
              <div className="bgd_primary">
                <a href="#"><i className="fa-brands fa-linkedin-in bgd_primary"></i></a>
              </div>
              <div className="bgd_primary">
                <a href="#"><i className="fa-brands fa-facebook-f bgd_primary"></i></a>
              </div>
              <div className="bgd_primary">
                <a href="#"><i className="fa-brands fa-instagram bgd_primary"></i></a>
              </div>
            </div>
          </div>
          <div className="list_item_2 list_item">
            <div className="contact">
              <p>Get in touch:</p>
              <a href="tel:2347037207718" target="_blank">Tel: +2347037207718</a>
            </div>
            <div className="contact">
              <p>For Inquiries:</p>
              <a href="mailto:info@hermakop.com" target="_blank">info@hermakop.com</a>
            </div>
            <div className="contact">
              <p>Talk to an expert:</p>
              <a href="mailto:olaitan@hermakop.com" target="_blank">olaitan@hermakop.com</a> 
            </div>
          </div>
          <div className="list_item_3 list_item">
            <a href="#showcase" className="scroll_top"><i className="fa-solid fa-angle-up fa-2x bgd_primary "></i></a>
            <p>Hermakop &copy; 2021. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;

