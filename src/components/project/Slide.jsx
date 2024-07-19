import React from 'react'
import Im4  from "../../assets/Im4.jpeg"
import Im5  from "../../assets/Im5.jpeg"
import Im6  from "../../assets/Im6.jpeg"


const Slide = () => {
  return (
    <div className="slider-wrapper">
        <h3 className="project__title">Web</h3>
            <div className="slider">
                <img src={Im6} alt=""  id="slide-6"/>
                <img src={Im5} alt=""  id="slide-5"/>
                <img src={Im4} alt=""  id="slide-4"/>

                <div className="slider-nav">
                    <a href="#slide-6"></a>
                    <a href="#slide-5"></a>
                    <a href="#slide-4"></a>
                </div>
            </div>
        <div className="project__description">
            <p>
                This was my first project that make me know how to use HTML and CSS 
                The game is like Epic game website for download and get information of game 
            </p>
        </div>
    </div>
  )
}

export default Slide