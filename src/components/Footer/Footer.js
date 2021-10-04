import React from 'react';
import './Footer.css';


const Footer = () => {

    return (
        // <!-- FOOTER -->
        <footer className="w-100 py-4 flex-shrink-0 footer-container">
            <div className="container py-4">
                <div className="row gy-4 gx-5">
                    <div className="col-lg-4 col-md-6">
                        <h5 className="h1">About</h5>
                        <p className="small text-muted fs-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                        <p className=" fs-6 small text-muted mb-0">&copy; Copyrights. All rights reserved. <a href="/">ibrahimH.com</a></p>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h5 className=" mb-3 fs-3">Services</h5>
                        <ul className=" fs-5 list-unstyled text-muted">
                             <li><a href="/">Home</a></li>
                            <li><a href="/">Service</a></li>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h5 className=" mb-3 fs-3">Careers</h5>
                        <ul className=" fs-5 list-unstyled text-muted">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Service</a></li>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h5 className="mb-3 fs-3">Newsletter</h5>
                        <p className="small text-muted fs-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                        <form action="#">
                            <div className="input-group mb-3">
                                <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                <button className="btn btn-warning" id="button-addon2" type="button">
                                    send </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;