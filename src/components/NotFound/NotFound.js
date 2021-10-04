import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className="not-found">
            <div className="container not-found-title">
                <h2>404</h2>
            <p>WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND</p>
            <button className="btn btn-warning">
                <Link to="/home"
                style={{
                    textDecoration: "none",
                    color: "#880ed4",
                    padding:"10px 20px"
                  }}
                >
                    Back To Home
                </Link>
            </button>
            </div>
        </div>
    );
};

export default NotFound;