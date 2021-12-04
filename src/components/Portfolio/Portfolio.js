import React from 'react';
import './Portfolio.css';
import work1 from '../../images/work/work11.png';
import work2 from '../../images/work/work22.png';
import work3 from '../../images/work/work33.png';
import work4 from '../../images/work/work4.png';
import work5 from '../../images/work/work5.png';
import work6 from '../../images/work/work6.png';
const Portfolio = () => {
    return (
        <div id='portfolio' className='portfolio-bg'>
            <div className="container">
                <div className="section-title">
                    <h1>My <span>Portfolio</span></h1>
                </div>
                {/* portfolio item part */}
                <div className="row mt-5">
                    <div className="col-lg-4 mb-4">
                        <div className="item-thumbnail">
                            <img className='img-fluid' src={work1} alt="" />
                            <div className="content-overlay">
                                <div className="content">
                                    <h5 className='mt-5 fw-bold'>Trper Travel Agency</h5>
                                    <div className="links">
                                        <a rel="noopener noreferrer" href="https://triper-agency.web.app/" className="link" target="_blank"><i className="fas fa-link"></i></a>
                                        <a rel="noopener noreferrer" className="img-popup image-preview" target="_blank" href="https://github.com/HossenMahmud/triper-agency-client">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                    <div className='details-button'>
                                        <button>Project Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="item-thumbnail">
                            <img className='img-fluid' src={work2} alt="" />
                            <div className="content-overlay">
                                <div className="content">
                                    <h5 className='mt-5 fw-bold'>Donto Dental Clinic</h5>
                                    <div className="links">
                                        <a rel="noopener noreferrer" href="https://donto-dental-clinic-697d3.web.app/" className="link" target="_blank"><i className="fas fa-link"></i></a>
                                        <a rel="noopener noreferrer" className="img-popup image-preview" target="_blank" href="https://github.com/HossenMahmud/donto-dental-clinic">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                    <div className='details-button'>
                                        <button>Project Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="item-thumbnail">
                            <img className='img-fluid' src={work3} alt="" />
                            <div className="content-overlay">
                                <div className="content">
                                    <h5 className='mt-5 fw-bold'>Kitton Child Edu</h5>
                                    <div className="links">
                                        <a rel="noopener noreferrer" href="https://hardcore-tereshkova-19b4ad.netlify.app/" className="link" target="_blank"><i className="fas fa-link"></i></a>
                                        <a rel="noopener noreferrer" className="img-popup image-preview" target="_blank" href="https://github.com/HossenMahmud/kitton-app">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                    <div className='details-button'>
                                        <button>Project Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="item-thumbnail">
                            <img className='img-fluid' src={work4} alt="" />
                            <div className="content-overlay">
                                <div className="content">
                                    <h5 className='mt-5 fw-bold'>Suissand Watch Store</h5>
                                    <div className="links">
                                        <a rel="noopener noreferrer" href="https://suissand-watch.web.app/" className="link" target="_blank"><i className="fas fa-link"></i></a>
                                        <a rel="noopener noreferrer" className="img-popup image-preview" target="_blank" href="https://github.com/HossenMahmud/suissand-watch-client">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                    <div className='details-button'>
                                        <button>Project Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="item-thumbnail">
                            <img className='img-fluid' src={work5} alt="" />
                            <div className="content-overlay">
                                <div className="content">
                                    <h5 className='mt-5 fw-bold'>Foodball Player</h5>
                                    <div className="links">
                                        <a rel="noopener noreferrer" href="https://hossenmahmud.github.io/responsive-football/" className="link" target="_blank"><i className="fas fa-link"></i></a>
                                        <a rel="noopener noreferrer" className="img-popup image-preview" target="_blank" href="https://github.com/HossenMahmud/responsive-football">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                    <div className='details-button'>
                                        <button>Project Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="item-thumbnail">
                            <img className='img-fluid' src={work6} alt="" />
                            <div className="content-overlay">
                                <div className="content">
                                    <h5 className='mt-5 fw-bold'>datasoft company</h5>
                                    <div className="links">
                                        <a rel="noopener noreferrer" href="https://youthful-knuth-917d91.netlify.app/" className="link" target="_blank"><i className="fas fa-link"></i></a>
                                        <a rel="noopener noreferrer" className="img-popup image-preview" target="_blank" href="https://github.com/HossenMahmud/datasoft-company">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                    <div className='details-button'>
                                        <button>Project Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;