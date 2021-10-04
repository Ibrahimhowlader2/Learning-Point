import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("./fakeData.JSON")
            .then(res => res.json())
            .then(data => setServices(data.results))
    }, [])

    return (
        <div>
            <section id="services">
                <div className="services-title row align-items-center">

                    <div className="text-center">
                        <h2>Our Services</h2>
                        <p>We offer the most complete house renovating services in the country</p>
                    </div>
                </div>
                <div className="container">

                    <div className="row">
                        {
                            services.map(service => (<Service
                                key = {service.id}
                                service={service}
                            ></Service>))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;