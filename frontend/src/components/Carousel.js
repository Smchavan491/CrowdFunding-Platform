import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Carousel() {
    const navigate = useNavigate(); // Hook for navigation

    const handleRegisterClick = () => {
        navigate('/register'); // Redirect to register page
    };

    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    
                    {/* Centered Quote and Button */}
                    <div className='carousel-caption d-flex flex-column align-items-center justify-content-center' style={{ zIndex: "10", top: "50%", transform: "translateY(-50%)" }}>
                        <h2 className="text-white fw-bold">"Giving is not just about making a donation, it's about making a difference."</h2>
                        <button className="btn btn-lg btn-success mt-3" onClick={handleRegisterClick}>Want to Donate?</button>
                    </div>

                    <div className="carousel-item active" data-bs-interval="3000">
                        <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" style={{ filter: 'brightness(30%)' }} alt="Slide 1" />
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src="https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" style={{ filter: 'brightness(30%)' }} alt="Slide 2" />
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src="https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" style={{ filter: 'brightness(30%)' }} alt="Slide 3" />
                    </div>
                </div>

                {/* Carousel Controls */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;
