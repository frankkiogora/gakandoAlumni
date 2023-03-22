import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return(
        <div className="home-container">
      <div className="row">
        <div className="col-md-3">
          <Link to="/about" className="nav-link">
            About Us
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/members" className="nav-link">
            Members
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/contact" className="nav-link">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="jumbotron">
        <h1>Welcome to Gakando Alumni Association</h1>
<p>Join us today and become part of a vibrant and dynamic community of alumni!
        </p>
      </div>
    </div>
  );
}

export default Home;
