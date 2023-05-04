import React from "react";
import { useState } from "react";
import "../styles/Home.css";
<script src="http://localhost:8097"></script>;

const Home = () => {
  const [active, setActive] = useState(false);
  const toggleOverlay = () => setActive(!active);
  return (
    <div className="home-section">
      {/* Hero section */}
      <section className="HeroSection">
        <div className="HeroText">
          <h1>Welcome to Gakando Alumni</h1>
          <p>Your journey to success starts here!</p>
          <button className="btn-cta">Get Started</button>
        </div>
      </section>

      {/* Gallery section */}
      <section className="gallery-section">
        <h2>Alumni Projects</h2>
        <div className="gallery">
          <div className="gallery-item">
            <img
              src="https://source.unsplash.com/800x800/?nature"
              alt="Nature"
              onClick={toggleOverlay}
            />
            <div className={`overlay ${active ? "active" : ""}`}>
              <h3>Library</h3>
              <p>New School Library minus the books.</p>
            </div>
          </div>
          <div className="gallery-item">
            <img
              src="https://source.unsplash.com/800x800/?animals"
              alt="Animals"
              onClick={toggleOverlay}
            />
            <div className={`overlay ${active ? "active" : ""}`}>
              <h3>Class Room </h3>
              <p>A few images of the new classrooms.</p>
            </div>
          </div>
          <div className="gallery-item">
            <img
              src="https://source.unsplash.com/800x800/?food"
              alt="Food"
              onClick={toggleOverlay}
            />
            <div className={`overlay ${active ? "active" : ""}`}>
              <h3>School Landscaping</h3>
              <p>The environment looks nice for study.</p>
            </div>
          </div>
          <div className="gallery-item">
            <img
              src="https://source.unsplash.com/800x800/?travel"
              alt="Travel"
              onClick={toggleOverlay}
            />
            <div className={`overlay ${active ? "active" : ""}`}>
              <h3>The school gate</h3>
              <p>The gate that will be upgraded soon.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
