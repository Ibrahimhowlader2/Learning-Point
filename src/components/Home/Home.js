import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../HeroSection/HeroSection';
import HomeServices from '../HomeServices/HomeServices';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("./fakeDataHome.JSON")
            .then(res => res.json())
            .then(data => setServices(data.results))
    }, [])


    return (
        <div>
            <HeroSection></HeroSection>

            <section id="home-services">
                <div className="container">
                    <div className="title row">

                        <div className="col-md-6">
                            <h2>All <span style={{
                                color: "#880ed4"
                            }}>Services</span> of Learning Point</h2>
                        </div>
                        <div className="col-md-6 text-end" >
                            <Link to="services"
                            style={{
                                textDecoration: "none",
                                color: "#880ed4",
                                fontSize:"20px"
                              }}
                            >See All</Link>
                        </div>
                    </div>
                    <div className="row">
                        {
                            services.map(service => (<HomeServices
                                key = {service.id}
                                service={service}
                            ></HomeServices>))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;