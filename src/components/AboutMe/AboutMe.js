import React from 'react';
import './AboutMe.css';
import aboutPhoto from '../../images/about.jpg';
import aboutIcon1 from '../../images/about-icon1.png';
import aboutIcon2 from '../../images/about-icon2.png';
import aboutIcon3 from '../../images/about-icon3.png';
import aboutIcon4 from '../../images/about-icon4.png';


const AboutMe = () => {
    return (
        <div className='aboutMe-bg'>
            <div className="container">
                <div className="section-title">
                    <h1>About <span>Me</span> </h1>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4">
                        <div className="about-photo">
                            <img className='img-fluid' src={aboutPhoto} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-8 text-start">
                        <div className="about-pra text-white">
                            <p> I am Junior Web developer able to build a Web presence from the ground up - from concept, navigation, layout and programming to UX and SEO. Skilled at writing well-designed, testable and efficient code using current best practices in Web development. Fast learner, hard worker and team player who is proficient in an array of scripting languages and multimedia Web tools.My working experience includes JavaScript, ES6, React, React Router, Node.js, Express.js, MongoDB, Firebase, Heroku, HTML, CSS, Bootstrap, Material UI. I have designed, developed, and launched customized, highly responsive web applications solutions using advanced technologies.</p>
                            <div className="row pt-3">
                                <div className="col-lg-6">
                                    <div className="personal-info">
                                        <p><span>Name: </span>MD Hossen</p>
                                        <p><span>Age: </span> 25</p>
                                        <p><span>Phone: </span>+8801786502485</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="personal-info">
                                        <p><span>Degree: </span>CSE</p>
                                        <p><span>Mail: </span>hossenmahmud15@gmail.com</p>
                                        <div className="social-icon">
                                            <ul>
                                                <li>
                                                    <a href="https://www.facebook.com/hossen.mahmud.332"> <i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com/hossen.mahmud.332"> <i className="fab fa-linkedin-in"></i></a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com/hossen.mahmud.332"> <i className="fab fa-github"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="download-cv pt-3">
                                <a className='mybtn' href="https://drive.google.com/file/d/1K-GPUrDCrsmhzCggZrOGLWV4jyd7Saik/view?usp=sharing">
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 mt-5">
                        <div className="row text-start">
                        </div>
                    </div>
                </div>
            </div>
            {/* Counter Area Start */}
            <div className="counter-area">
                <div className="container">
                    <div className="row text-white">
                        <div className="col-lg-3 col-md-6">
                            <div class="single-counter">
                                <img src={aboutIcon1} alt="" />
                                <h1 style={{ fontSize: '50px' }} className='fw-bold'>15+</h1>
                                <p style={{ fontSize: '18px' }}>Project Done</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div class="single-counter">
                                <img src={aboutIcon2} alt="" />
                                <h1 style={{ fontSize: '50px' }} className='fw-bold'>5+</h1>
                                <p style={{ fontSize: '18px' }}>Happy Users</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div class="single-counter">
                                <img src={aboutIcon3} alt="" />
                                <h1 style={{ fontSize: '50px' }} className='fw-bold'>10+</h1>
                                <p style={{ fontSize: '18px' }}>Great Reviews</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div class="single-counter">
                                <img src={aboutIcon4} alt="" />
                                <h1 style={{ fontSize: '50px' }} className='fw-bold'>20+</h1>
                                <p style={{ fontSize: '18px' }}>Support Team</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Counter Area End */}
        </div>
    );
};
export default AboutMe;
