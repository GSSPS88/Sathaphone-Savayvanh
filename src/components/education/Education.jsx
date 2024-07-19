import React from 'react'
import "./education.css"
const Education = () => {
  return (
    <section className="education section" id="education">
        <h2 className="section__title">Education</h2>
        <span className="section__subtitle"></span>

        <div className="education__container container">
            <div className="education__tabs">
                <div className="education__button education__active button--flex">
                    <i class="bi bi-mortarboard education__icon"></i>{" "}
                    Education
                </div>
            </div>

            <div className="education__sections">
                <div className="education__content education__content-active">
                    <div className="education__data">

                        <div>
                            <h3 className="education__title">Primary School</h3>
                            <span className="education__subtitle">Mina Primary Scool</span>
                            <div className="education__calender">
                            <i class="bi bi-calendar"></i>
                            2009-2014
                            </div>
                        </div>

                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                    </div>

                    <div className="education__data">
                        <div></div>
                        
                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>

                        <div>
                            <h3 className="education__title">Secondary School</h3>
                            <span className="education__subtitle">Vientiane High School</span>
                            <div className="educatio__calender">
                                <i class="bi bi-calendar"></i>
                                2014-2021
                            </div>
                        </div>
                    </div>

                    <div className="education__data">

                        <div>
                            <h3 className="education__title">Vientian College</h3>
                            <span className="education__subtitle">Pre-Intermediate</span>
                            <div className="education__calender">
                            <i class="bi bi-calendar"></i>
                            2021-Present
                            </div>
                        </div>

                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                    </div>

                    <div className="education__data">
                        <div></div>
                        
                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>

                        <div>
                            <h3 className="education__title">Bachelor's degree</h3>
                            <span className="education__subtitle">Information Technology</span>
                            <div className="educatio__calender">
                                <i class="bi bi-calendar"></i>
                                2024
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Education
