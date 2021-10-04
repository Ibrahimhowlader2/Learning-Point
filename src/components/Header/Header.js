import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <header id="header">
            <section>
                <nav
                    id="navbar_top"
                    className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container">
                        <a className="navbar-brand" href="/home">
                            <img  src={logo} alt="" />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#main_nav"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="main_nav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <NavLink 
                                    className="nav-link" 
                                    exact to="/home">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                    className="nav-link" 
                                    exact to="/services">
                                        Services
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                    className="nav-link" 
                                     to="/about">
                                        About Us
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                    className="nav-link" 
                                    exact to="/contact">
                                        Contact Us
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </header>
    );
};

export default Header;