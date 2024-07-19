import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class="bi bi-mortarboard about__icon"></i>

            <h3 className="about__title">Study</h3>
            <span className="about__subtitle">I'm a 3rd year student in the Faculty of Engineering</span>
        </div>
        <div className="about__box">
            <i class="bi bi-file-earmark-text about__icon"></i>

            <h3 className="about__title">Project</h3>
            <span className="about__subtitle">2 Projects</span>
        </div>
        <div className="about__box">
            <i class="bi bi-headset about__icon"></i>

            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 8:00-00:00</span>
        </div>
    </div>
  )
}

export default Info