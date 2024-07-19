import React from 'react'
import "./about.css"
import Mypic from "../../assets/mypic.png"
import CV from "../../assets/CV.pdf"
import Info from './Info'
const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">
            About Me
        </h2>
        <span className="section__subtitle">
            Get to know me !
        </span>
        <div className="about__container container grid">
            <img src={Mypic} alt="#" className="about__img" />

            <div className="about__data">
                <Info />

                <p className="about__description">
                    Hi, my name is Sathaphone 
                    Savayvanh. I am 20 years old and 
                    a 3rd-year IT student in the Faculty 
                    of Engineering.
                </p>
                <p className="about__description">
                    I am interested in website and 
                    application development. Currently, 
                    I am looking for a company where I 
                    can improve my skills and learn 
                    how to work as a developer.
                </p>

                <a download="" href={CV} className="button button--flex">
                    Download CV

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                    </svg>
                </a>
            </div>
        </div>
    </section>
  )
}

export default About
