import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Navbar() {
  const [visible, setVisible] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false); // Hide navbar when scrolling down
      } else {
        setVisible(true); // Show navbar when scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      style={{
        minHeight: "40px", // Reduced navbar height
        padding: "5px 15px", // Adjusted padding for compactness
        transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        opacity: visible ? "1" : "0",
      }}
    >
      <div id="navbar-container" className="container-fluid">
        <Link id="navbar-brand" className="navbar-brand fs-4 fst-italic fw-bold" to="/">
          CrowdFunding
        </Link>

        <button
          id="navbar-toggler"
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navbar-links" className="collapse navbar-collapse justify-content-end">
          <ul id="nav-items" className="navbar-nav">
            <li id="login-nav-item" className="nav-item">
              <Link id="login-btn" className="btn btn-outline-light fw-bold" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
