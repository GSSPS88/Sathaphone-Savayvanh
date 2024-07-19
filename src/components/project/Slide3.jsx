import React from 'react'
import Pm1  from "../../assets/pm1.jpg"
import Pm2  from "../../assets/pm2.jpg"
import Pm3  from "../../assets/pm3.jpg"
import Pm4  from "../../assets/pm4.jpg"
import Pm5  from "../../assets/pm5.jpg"
import Pm6  from "../../assets/pm6.jpg"
import Pm7  from "../../assets/pm7.jpg"
import Pm8  from "../../assets/pm8.jpg"
import Pm9  from "../../assets/pm9.jpg"
import Pm10  from "../../assets/pm10.jpg"
import Pm11  from "../../assets/pm11.jpg"

const Slide3 = () => {
  return (
    <div className="slider-wrapper">
        <h3 className="project__title">Design</h3>
            <div className="slider">
                <img src={Pm1} alt=""  id="slide-1"/>
                <img src={Pm2} alt=""  id="slide-2"/>
                <img src={Pm3} alt=""  id="slide-3"/>
                <img src={Pm4} alt=""  id="slide-4"/>
                <img src={Pm5} alt=""  id="slide-5"/>
                <img src={Pm6} alt=""  id="slide-6"/>
                <img src={Pm7} alt=""  id="slide-7"/>
                <img src={Pm8} alt=""  id="slide-8"/>
                <img src={Pm9} alt=""  id="slide-9"/>
                <img src={Pm10} alt=""  id="slide-10"/>
                <img src={Pm11} alt=""  id="slide-11"/>

            </div>
                <div className="slider-nav">
                    <a href="#slide-1"></a>
                    <a href="#slide-2"></a>
                    <a href="#slide-3"></a>
                    <a href="#slide-4"></a>
                    <a href="#slide-5"></a>
                    <a href="#slide-6"></a>
                    <a href="#slide-7"></a>
                    <a href="#slide-8"></a>
                    <a href="#slide-9"></a>
                    <a href="#slide-10"></a>
                    <a href="#slide-11"></a>
                </div>
        <div className="project__description">
            <p>My design work for for an online shop</p>
        </div>
    </div>
  );
}

export default Slide3