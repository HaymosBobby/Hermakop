import React from 'react';
import { Link } from 'react-router-dom';

import left from '../images/left.svg';
import right from '../images/right.svg';
import period from '../images/period.svg';

import ifiabi from '../images/ifiabi_1.svg';
import comsec from '../images/comsec_2.svg';
import taxad from '../images/taxad_3.svg';
import pub from '../images/pub_4.svg';
import busad from '../images/busad_5.svg';

const HomePage = () => {
  return (
    <div>
       <section id="showcase">
        <div className="showcase_content">
          <h1><span>Legal</span> Solutions For Daily Problems</h1>
          <p>
            Smart approaches to legal solutions with exceptional service. Legal talent and expertise necessary to meet our clients’ needs in an ever-changing and fast-paced environment.
          </p>
          <a href="#contact_us" className="btn">Talk to an expert</a>
        </div>
      </section>

      <section id="about_us">
        <div className="image">
          
        </div>
        <div className="about_us_content">
          <h1 className="text_primary">About Us</h1>
          <h3>
            Confidentiality and excellence are our watch words
          </h3>
          <p>
            Hermakop consulting is an online platform to interface with the quickest online legal advice you can get. The firm deals with major soliciting work and covers every aspect of legal activities surrounding man's existence: tax, finance and investment, insurance, real estate, intellectual property... 
            <a href="./about.html">Read more</a>
          </p>
        </div>
      </section>

      <section id="practice_areas">
        <h1 className="text_primary">Practice Areas</h1>
        <div className="line_1">
          <div className="areas">
            <img src={ifiabi} alt="IFIABI"/>
            <p>ISLAMIC FINANCE AND INVESTMENT / AGENCY BANKING AND INSURANCE</p>
          </div>
          <div className="areas">
            <img src={comsec} alt="COMSEC"/>
            <p>COMPANY SECRETARIAL / COMPLIANCE</p>
          </div>
          <div className="areas">
            <img src={taxad} alt="TAXAD"/>
            <p>TAX ADVISORY</p>
          </div>
        </div>
        <div className="line_1">
          <div className="areas">
            <img src={pub} alt="PUB"/>
            <p>HERMAKOP PUBLISHING</p>
          </div>
          <div className="areas">
            <img src={busad} alt="BUSAD"/>
            <p>BUSINESS ADVISORY</p>
          </div>
        </div>
      </section>

      <section id="our_publications">
        <h1 className="text_primary">Our Publications</h1>
        <div className="publications_container">
          <div className="arrow">
            <img src={left} alt="LEFT" />
          </div>
          <div className="publications">
            <div className="card" id="card_1">
              <h4>THE IMPACT OF COVID-19 ON IMMIGRAION</h4>
              <p>Publications <img src={period} alt="period" /> By Hermakop</p>
              <a href="#">Read more</a> 
            </div>
            <div className="card" id="card_2">
              <h4>THE IMPACT OF COVID-19 ON IMMIGRAION</h4>
              <p>Publications <img src={period} alt="period" /> By Hermakop</p>
              <a href="#">Read more</a> 
            </div>
            <div className="card" id="card_3">
              <h4>THE IMPACT OF COVID-19 ON IMMIGRAION</h4>
              <p>Publications <img src={period} alt="period" /> By Hermakop</p>
              <a href="#">Read more</a> 
            </div>
          </div>
          <div className="arrow">
            <img src={right} alt="LEFT" />
          </div>
        </div>
        <Link to="/bloglists" className="btn">View Our Publications</Link>
      </section>

      <section id="enquiry_form">
        <h1>MAKE AN ENQUIRY</h1>
        <form id="contactForm" className="form_group">
          <div className="form">
            <input 
            type="text"
            name="name"
            id="name"
            placeholder="NAME" 
            required/>
            <input 
            type="email"
            name="email"
            id="email"
            placeholder="EMAIL ADDRESS" />
          </div>
          <div className="form">
            <input 
            type="text"
            name="phone"
            id="phone"
            placeholder="TELEPHONE/CONTACT NUMBER" />
            <input 
            type="text"
            name="area"
            id="area"
            placeholder="AREA OF LAW" />
          </div>
          <div className="form">
            <textarea 
            type="text"
            name="message" 
            id="message"
            placeholder="MESSAGE"></textarea>
          </div>
          <button className="btn" type="submit">SEND</button>
        </form>
      </section>
    </div>
  )
}

export default HomePage;
