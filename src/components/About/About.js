import React from 'react';
import img from '../../images/about.webp'
import teacher1 from '../../images/teacher1.jpg'
import teacher2 from '../../images/teacher2.jpg'
import teacher3 from '../../images/teacher3.jpg'
import './About.css';

const About = () => {
    return (
        <section>
            <div className="services-title row align-items-center">
                <div className="text-center">
                    <h2>About Us</h2>
                    <p>We offer the most complete house renovating services in the country</p>
                </div>
            </div>
            <div className="container">
                <div className="row align-items-center p-5">
                    <div className="col-md-6">
                        <h2>Welcome to Edua</h2>
                        <p> <strong>
                            It’s all going about making ideas happen. Nor again is there anyone who loves or pursues or desires
                        </strong> Proin sagittis feugiat elit finibus pretium. Donec et tortor non purus vulputate tincidunt. Cras congue posuer eros eget egestas. Aenean varius ex ut ex laoreet fermentum. odio Proin mattis congue tristique.

                            Aenean sit amet massa eu velit commodo cursus fringilla a tellus. Morbi eros urna, mollis porta feugiat non, ornare eu augue. Sed rhoncus est sit amet diam tempus, et tristique est viverra. Etiam ex tellus, sectur at dapibus id, luctus at odio. Proin mattis congue tristique.</p>
                    </div>
                    <div className="col-md-6">
                        <img className="d-block w-100" src={img} alt="" />
                    </div>
                </div>
                <div className="row p-5 teacher-title">
                    <h2 className="text-center">Our Teachers</h2>
                </div>
            </div>
            <div className="our_container">
                {/* <!--Team 1--> */}
                <div className="our-team">
                    <div className="pic">
                        <img src={teacher1} alt="" />
                    </div>
                    <div className="team-content">
                        <h3 className="title">Chase M. Bynum</h3>
                        <span className="post">English Teacher</span>
                    </div>
                    <ul className="social">
                        <li><a href="/" className="fab fa-facebook"> </a></li>
                        <li><a href="/" className="fab fa-twitter"> </a></li>
                        <li><a href="/" className="fab fa-instagram"> </a></li>
                        <li><a href="/" className="fab fa-linkedin"> </a></li>
                    </ul>
                </div>

                {/* <!-- Team 2--> */}
                <div className="our-team">
                    <div className="pic">
                        <img src={teacher2} alt="" />
                    </div>
                    <div className="team-content">
                        <h3 className="title">Marc K. Bruhn</h3>
                        <span className="post">Math Teacher</span>
                    </div>
                    <ul className="social">
                        <li><a href="/" className="fab fa-facebook"> </a></li>
                        <li><a href="/" className="fab fa-twitter"> </a></li>
                        <li><a href="/" className="fab fa-instagram"> </a></li>
                        <li><a href="/" className="fab fa-linkedin"> </a></li>
                    </ul>
                </div>
                {/* <!-- Team 3--> */}
                <div className="our-team">
                    <div className="pic">
                        <img src={teacher3} alt="" />
                    </div>
                    <div className="team-content">
                        <h3 className="title">Brenda C. Garcia</h3>
                        <span className="post">CSE Teacher</span>
                    </div>
                    <ul className="social">
                        <li><a href="/" className="fab fa-facebook"> </a></li>
                        <li><a href="/" className="fab fa-twitter"> </a></li>
                        <li><a href="/" className="fab fa-instagram"> </a></li>
                        <li><a href="/" className="fab fa-linkedin"> </a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;