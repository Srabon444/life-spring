import React from 'react';
import './HeroSection.css';
import doctorImg from '../../../images/hero-section-img.png';

import Typist from 'react-typist';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'


const HeroSection = () => {
    return (
        <div className="container hero-section py-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 lh-lg" data-aos="fade-right">
                    <small className="fw-light text-secondary">For Better Wellness & Hope</small>
                    <h1>Welcome to LifeSpring
                        <br />
                        Psychiatric Clinic

                    </h1>

                    <p className="text-secondary">
                        <small>
                            <Typist>
                                Our Private Psychiatrists London specialise in assesment and treatment for the full range of psychiatric disorders including Assessment, Diagnosis, Treatment plans, Psychological treatment, Counselling and prescribe Medications.
                            </Typist>

                        </small>
                    </p>
                    <NavLink to="/about">
                        <button className="btn custom-green-btn">
                            Learn More <FontAwesomeIcon icon={faAngleDoubleRight} />
                        </button>
                    </NavLink>

                </div>
                <div className="col-md-6" data-aos="fade-left">
                    <div>
                        <img className="img-fluid w-100" src={doctorImg} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;