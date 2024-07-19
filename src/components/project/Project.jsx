import React from 'react';
import "./project.css";
import Slide from './Slide';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
const Project = () => {
  return (
    <section className="project section" id="project">
        <h2 className="section__title">
            Projects
        </h2>
        <span className="section__subtitle">
            My own projects
        </span>

        <div className="project__container container grid">
            <Slide />
            <Slide2 />
            <Slide3 />
        </div>
    </section>
  )
}

export default Project