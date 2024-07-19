import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_n9tq7oa', 'template_oqj6nm8', form.current, {
            publicKey: 'O356Xbp9SBvbpKfGh',
          })
          e.target.reset();
        };

  return (
    <section className="contact section" id="contact">
          <h2 className="section__title">
            Contact
          </h2>
          <span className="section__subtitle">
            Contact Me
          </span>
            <div className="contact__container contact grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">

                        <div className="contact__card">
                            <i class="bi bi-envelope-at contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">Sathaphonegod@gmail.com</span>

                            <a href="mailto:sathaphonegod@gmail.com" className="contact__button">Text Me <i class="bi bi-caret-right-fill contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card">
                            <i class="bi bi-whatsapp contact__card-icon"></i>
                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">+856 20 555 962 49</span>

                            <a href="https://wa.me/+8562055596249" className="contact__button">Text Me <i class="bi bi-caret-right-fill contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card">
                            <i class="bi bi-messenger contact__card-icon"></i>
                            <h3 className="contact__card-title">Messenger</h3>
                            <span className="contact__card-data">FB: Sathaphone Savayvanh</span>

                            <a href="https://www.facebook.com/share/S6AP5Bngrz41hoCo/?mibextid=qi2Omg" className="contact__button">Text Me <i class="bi bi-caret-right-fill contact__button-icon"></i></a>
                        </div>

                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Comment</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text" name="name" className="contact__form-input" placeholder="Your name"/>
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input type="email" name="email" className="contact__form-input" placeholder="Yourname@gmail.com"/>
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Comment</label>
                            <textarea name="comment" cols="30" rows="10" className="contact__form-input" placeholder="Comment"></textarea>
                        </div>
                        
                        <button className="button button--flex">
                            Send Message
                        <i class="bi bi-send"></i>
                        </button>
                    </form>
                </div>

            </div>
    </section>
  )
}

export default Contact;