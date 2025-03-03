import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Logo Section */}
          <div className="col-md-4 text-md-start text-center mb-3 mb-md-0">
            <img 
              src="https://img.freepik.com/free-vector/abstract-logo-flame-shape_1043-44.jpg?t=st=1740215623~exp=1740219223~hmac=ffd5d9201225b2b9d147b8c97790ffcf53a6408b9b5ce13ab18f3cefed1b17b9&w=900" 
              alt="Logo" 
              className="img-fluid" 
              width="120"
            />
          </div>

          {/* Social Media Icons */}
          <div className="col-md-4 text-center">
            <a href="#" className="text-light me-3">
              <i className="fas fa-envelope fa-2x"></i>
            </a>
            <a href="#" className="text-light me-3">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="#" className="text-light me-3">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#" className="text-light">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </div>

          {/* Author Section */}
          <div className="col-md-4 text-md-end text-center">
            <p className="mb-1">Author 1</p>
            <p className="mb-1">Author 2</p>
            <p className="mb-0">Author 3</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
