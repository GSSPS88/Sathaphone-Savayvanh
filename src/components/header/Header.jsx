import React, { useState } from 'react'
import "./header.css"
const Header = () => {
  /*======== Toggle Menu ========*/
    const[Toggle, showMenu] = useState(false);
  
  return (
      <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">
              MyPortfolio
            </a>

            <div className= {Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <div className="nav__close">
                    <i class="bi bi-x-lg" onClick={() => showMenu(!Toggle)} ></i>
                </div>
                
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link">
                          <i class="bi bi-house-door nav__icon"></i> 
                          Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                          <i class="bi bi-person nav__icon"></i> 
                          About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                          <i class="bi bi-lightbulb nav__icon"></i> 
                          Skills
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#project" className="nav__link">
                          <i class="bi bi-file-check nav__icon"></i> 
                          project
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                          <i class="bi bi-envelope nav__icon"></i> 
                          Contact
                        </a>
                    </li>
                </ul>

            </div>

          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
          </svg>

          </div>
        </nav>
    </header>
  );
}

export default Header