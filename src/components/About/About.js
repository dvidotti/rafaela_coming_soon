import React, {useState, useRef} from 'react';
import {useHistory} from 'react-router-dom';

import './About.css'

import {blockList} from './components/ListWithTitle/blockList'
import ListWithTitle from './components/ListWithTitle/ListWithTitle'

const About = (props) => {
  let history = useHistory()
 
  
  const sendToHome = () => {
    history.push('/')
  }


  return(
    <main className="about-page">
      <div className="nav-bar">
        <div className="logo nav-container left-nav mobile-version">
          <span onClick={() => sendToHome()} className="nav-link white">RV</span>
          {/* <span onClick={() => sendToHome()} className="nav-link white">home</span> */}
        </div>
        <div className="nav-container right-nav hide-on-mobile">
          <div onClick={() => sendToHome()} className="nav-link side-nav nav-container hide-on-mobile">
            <span className="nav-link padTop10">home</span>
          </div>
        </div>
      </div>
      <section className="body-about">
        <section  className="right-container-about">
          <div  className="right-inner-container-about">
            <div className="about-picture-container hide-on-mobile">
              <img className="image-about" src='rafa_pic.png' alt="Rafaela Portrait"/>
            </div>
            <div className="list-outer-container hide-on-mobile">
              <div className="list-inner-container">
                <div className="links-rows">
                  <a
                    href="mailto:hi@rafaelavinotti.com" 
                    className="link">
                    hello@rafaelavinotti.com
                  </a>
                </div>
                <div className="links-rows">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/rafaelavinotti/?originalSubdomain=uk" 
                    className="link"
                    >
                    Linkedin
                  </a>
                </div>
                <div className="links-rows">
                  <a
                    target="_blank" 
                    className="link"
                    href="https://www.instagram.com/rafavinotti/"
                    >
                    Instagram
                  </a>
                </div>
                <div className="links-rows-last">
                  <a
                    target="_blank"
                    href="https://cz.pinterest.com/rafaelavinotti/"
                    className="link"
                    >Pinterest
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-container">
          <div  className="about-scroll-section">
            <div className="width50">
              <div className="about-picture-container show-in-mobile paddingMob">
                <img className="image-about" src='rafa_pic.png' alt="Rafaela Portrait"/>
              </div>
              <div className="bottom-space bottom-right-desktop">
                <span className="big-text">
                I’m an Italian/ Brazilian Designer with a focus on creative strategy,
                brand design and user experience design.
                </span>
              </div>
              <div className="bottom-space">
                <span className="medium-text">
                  I have been working as a designer for 14 years,
                  but always combining other skills and interests
                  in my work. As a consultant, I was able to 
                  explore various professional possibilities and 
                  I can design experiences for brands, services and users.
                  I like working with people and projects I identify 
                  with and using my skills as tools to make a positive 
                  impact on the world.
                </span>
              </div>
              <div className="list-block">
                {blockList.map((i, idx) => 
                  <ListWithTitle key={idx} block={i}/>
                )}
              </div>
            </div>
            <div  className="right-inner-container-about hide-on-desktop">
            <div className="about-picture-container hide-on-mobile">
              <img className="image-about" src='rafa_pic.png' alt="Rafaela Portrait"/>
            </div>
            <div className="list-outer-container show-on-mobile">
              <div className="list-inner-container">
                <div className="links-rows">
                  <a
                    href="mailto:hello@rafaelavinotti.com" 
                    className="link">
                    hello@rafaelavinotti.com
                  </a>
                </div>
                <div className="links-rows">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/rafaelavinotti/?originalSubdomain=uk" 
                    className="link"
                    >
                    Linkedin
                  </a>
                </div>
                <div className="links-rows">
                  <a
                    target="_blank" 
                    className="link"
                    href="https://www.instagram.com/rafavinotti/"
                    >
                    Instagram
                  </a>
                </div>
                <div className="links-rows-last">
                  <a
                    target="_blank"
                    href="https://cz.pinterest.com/rafaelavinotti/"
                    className="link"
                    >Pinterest
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
      </section>
    </main>
  )
}

export default About