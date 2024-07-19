import React from 'react'
import Im1  from "../../assets/Im1.jpeg"
import Im2  from "../../assets/Im2.jpeg"
import Im3  from "../../assets/Im3.jpeg"

const Slide2 = () => {
  return (
    <div className="slider-wrapper">
        <h3 className="project__title">Web</h3>
            <div className="slider">
                <img src={Im3} alt=""  id="slide-3"/>
                <img src={Im2} alt=""  id="slide-2"/>
                <img src={Im1} alt=""  id="slide-1"/>

            </div>
                <div className="slider-nav">
                    <a href="#slide-3"></a>
                    <a href="#slide-2"></a>
                    <a href="#slide-1"></a>
                </div>
        <div className="project__description">
            <p>Recomment about resturants, hotel, activity, good tourist place in Laos (Vangvieng) 
                I’v learn about how to use responsive</p>
        </div>
    </div>
  )
}

export default Slide2