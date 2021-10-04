import React from 'react';
import { Link } from 'react-router-dom';
import './HomeServices.css';


const HomeServices = (props) => {

  const { picture, titleBtn, title, description } = props.service;

  return (
    // <!-- ============= COURSE SECTION START // ============== -->
    <div className="col-md-3 all-cards">
      <div className="card">
        <img src={picture} className="card-img-top" alt="..." />
        <div className="card-body p-4">
          <button className="btn btn-warning mt-2 mb-2">{titleBtn}</button>
          <h5 className="card-title mt-3 mb-3">{title}</h5>
          <p className="card-text">{description.slice(0, 120)}</p>
        </div>
        <div className="card-footer p-4">
          <div className="row">
            <div className="col-md-6 social-icons">
              <span><i className="far fa-heart"></i> 35</span>
              <span><i className="far fa-user"></i> 45</span>
            </div>
            <div className="col-md-6 text-end view-details">
              <Link to="/serviceDetails" style={{
                textDecoration: "none",
                color: "#880ed4"
              }}>
                <strong>View Details</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    //   /* <!-- ============= COURSE SECTION END // ============== --> */
  );
};

export default HomeServices;