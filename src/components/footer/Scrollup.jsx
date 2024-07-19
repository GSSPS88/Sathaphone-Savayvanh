import React from 'react'

const Scrollup = () => {
  return (
    <div className="footer__scroll">
        <a href="#home" className="footer__scroll-button button--flex">
            <span className="footer__scroll-name">See More</span>
            <i class="bi bi-caret-up-fill"></i>
        </a>
    </div>
  );
}

export default Scrollup
