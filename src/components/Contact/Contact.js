import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section>
            <div className="services-title row align-items-center contact-us-section">
                <div className="text-center">
                    <h2>Contact Us</h2>
                    <p>We offer the most complete house renovating services in the country</p>
                </div>
            </div>
            <div className="row p-5 align-items-center contact-main">
            <div className="contact-info">
                <div className="contact-card">
                    <i className="icon fas fa-envelope"></i>
                    <div className="contact-card-content">
                        <h3>Email</h3>
                        <span>sibrahim.ih@gmail.com</span>
                    </div>
                </div>

                <div className="contact-card">
                    <i className="icon fas fa-phone"></i>
                    <div className="contact-card-content">
                        <h3>Phone Number</h3>
                        <span>+8801629161451</span>
                    </div>
                </div>

                <div className="contact-card">
                    <i className="icon fas fa-map-marker-alt"></i>
                    <div className="contact-card-content">
                        <h3>Location</h3>
                        <span>Bangladesh</span>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Contact;