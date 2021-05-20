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
            <span className="nav-link pad-mob">about me</span>
          </div>
        </section>
        <section className="width65">
          <h1 className="huge-text">Hi, I’m Rafaela Vinotti.<br></br> This website is in transition – and so am I.</h1>
        </section>
        <section className="width90">
          <h3 className="medium-text">I’m a multidisciplinary designer based between London-UK and Sao Paulo-BR. I have been working as an independent professional with studios and clients on a wide range of projects and brands. A new website is coming, but if you are interested in my work, feel free to contact me =)</h3>
        </section>
      </div>
    </main>
    
  )
}

export default Home;

