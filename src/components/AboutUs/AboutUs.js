import React from 'react';
import './AboutUs.css';
import circleImg from '../../images/banner-image/circle-about-us.png';
import womenAboutUsImg from '../../images/women-about-us.jpg';
import mentalHealthImg from '../../images/mental-health.jpg';


const AboutUs = () => {



    return (
        <div className="container-fluid p-0">
            <div className="d-flex flex-column page-title-container justify-content-center align-items-center">
                <div className="text-center" data-aos="fade-down">
                    <h2 className="fw-bold page-title fs-1">About</h2>
                    <p>Who We Are</p>
                </div>
            </div>
            <div className="container">
                <div className="text-secondary mt-5">
                    <p>
                        <span className="fw-bold">LifeSpring</span> Psychiatric Clinic was established in 2007, it has helped many people by face to face in clinics, at patient’s home and patients abroad all over the World by phone, Skype, Whatsapp and other video links. London Psychiatric Clinic has kept itself away from close link with any private inpatient psychiatric unit and this is to avoid any conflict of interest.
                    </p>
                    <p>
                        Clinics and psychiatrists who get links with private inpatient or day hospitals are under pressure to use highly expensive residential for their patients.
                    </p>
                </div>
                <div className="row justify-content-center">
                    <img className="img-fluid" src={circleImg} alt="" style={{ height: 500, width: 500 }} />
                </div>

                <div className="mt-5">
                    <p>Welcome to LifeSpring Psychiatric Clinic</p>
                    <h2 className="custom-green-color fw-bold">Why Choose Us</h2>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6">
                            <small className="text-secondary">
                                <p>
                                    LifeSpring has been founded with the vision to be the nation’s leading community-based mental health institute dedicated to promoting mental health as a pivotal of overall wellness.
                                </p>
                                <p>
                                    Through advocacy, education, research, and assistance services we dream of a change as a beacon of hope for society.
                                </p>
                                <p>
                                    Believing in the social integration of mental health services and a gender-inclusive approach – our programs and strategies are committed to promote mental health awareness, to remove the social stigmas, and to ensure the accessibility of mental health services whenever and wherever needed.
                                </p>
                                <p>
                                    LifeSpring is committed to flourishing the overall mental health perspectives in Bangladesh. We hope and pursue to continue this journey witnessing the creation of thousands of beautiful narratives by healing hearts and transforming lives.
                                </p>

                                <div>
                                    <h4 className="custom-green-color">Mission</h4>
                                    <p>
                                        Our programs and initiatives fulfill our mission of promoting mental health, preventing mental disorders, and achieving victory over mental illness through advocacy, education, research, and services.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="custom-green-color">Vision</h4>
                                    <p>
                                        Team LifeSpring hopes and pursues to continue its journey, witnessing the creation of thousands of beautiful narratives by healing hearts and transforming the lives of individuals of the nation.
                                    </p>
                                </div>

                            </small>
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid w-100" src={womenAboutUsImg} alt="" />
                        </div>
                    </div>
                </div>

                <div>
                    <img className="img-fluid w-100" src={mentalHealthImg} alt="" />
                </div>




            </div>
        </div>
    );
};

export default AboutUs;