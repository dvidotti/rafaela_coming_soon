import React from 'react'
import './Home.css'
import {useHistory} from 'react-router-dom';

const Home = (props) => {
  let history = useHistory()

  const sendToAbout = () => {
    history.push("/about")
  }
  const sendToHome = () => {
    history.push("/")
  }

  return (
    <main>
      <div className="body-home">
        <section className="navbar">
          <div onClick={() => sendToHome()} className="logo nav-container">
            <span className="nav-link white">RV</span>
          </div>
          <div onClick={() => sendToAbout()} className="side-nav nav-container">
            <span className="nav-link pad-mob padTop10">about me</span>
          </div>
        </section>
        <section className="slogan-box">
          <span className="huge-text">Hi, I’m Rafaela Vinotti. This website is in transition – and so am I.</span>
        </section>
        <section className="maxW1030">
          <h3 className="large-text">I’m a multidisciplinary designer based between London and Sao Paulo. I have been working as an independent consultant with studios and clients on a wide range of projects and brands. A new website is coming, but if you are interested in my work, feel free to contact me =)</h3>
        </section>
      </div>
    </main>
    
  )
}

export default Home;

