import React from 'react'
import "./footer.css"
import Scrollup from './Scrollup'

const Footer = () => {
  return (
    <footer className="footer">
        <Scrollup />
        <div className="footer__container container">
            <h1 className="footer__title">Thanks For Visiting</h1>

            <div className="footer__social">
                <a href="https://www.facebook.com/share/S6AP5Bngrz41hoCo/?mibextid=qi2Omg" className="home__social-icon" target="_blank">
                    <i class="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com/godstp_svv?igsh=MXY3cTB6ejNqcGZicQ=" className="home__social-icon" target="_blank">
                    <i class="bi bi-instagram"></i>
                </a>
                <a href="https://www.tiktok.com/@pick.me.official?_t=8o6l3J9AYQJ&_r=1" className="home__social-icon" target="_blank">
                    <i class="bi bi-tiktok"></i>
                </a>
            </div>

            <ul className="footer__list">
                <li>
                    <a href="#Home" className="footer__link">Home</a>
                </li>
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#education" className="footer__link">Education</a>
                </li>
                <li>
                    <a href="#project" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
            </ul>

        </div>
            <span className="footer__copy">Wish you have a nice day</span>
    </footer>
  )
}

export default Footer