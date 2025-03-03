import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const campaigns = [
  { id: 1, title: "Campaign 1", description: "Description of Campaign 1", img: "/images/img1 (1).jpg" },
  { id: 2, title: "Campaign 2", description: "Description of Campaign 2", img: "/images/img3 (1).jpg" },
  { id: 3, title: "Campaign 3", description: "Description of Campaign 3", img: "/images/img4.jpg" },
  { id: 4, title: "Campaign 4", description: "Description of Campaign 4", img: "/images/img2 (1).jpg" },
  { id: 5, title: "Campaign 5", description: "Description of Campaign 5", img: "/images/img4.jpg" }
];

const CampaignCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % campaigns.length);
        }, 3000); // Change card every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const getVisibleCards = () => {
        let visible = [];
        for (let i = 0; i < 3; i++) {
            visible.push(campaigns[(activeIndex + i) % campaigns.length]);
        }
        return visible;
    };

    // Inline styles for consistent card size
    const cardStyle = {
        minHeight: "400px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column"
    };

    const cardHoverStyle = {
        transform: "scale(1.05)", 
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)"
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Ongoing Campaigns</h2>
            <div className="row justify-content-center">
                {getVisibleCards().map((campaign) => (
                    <div key={campaign.id} className="col-md-4 d-flex align-items-stretch">
                        <div 
                            className="card text-center w-100" 
                            style={cardStyle} 
                            onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
                            onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
                        >
                            <img src={campaign.img} className="card-img-top" alt={campaign.title} style={{ objectFit: "cover", height: "200px" }} />
                            <div className="card-body d-flex flex-column justify-content-between">
                                <h5 className="card-title">{campaign.title}</h5>
                                <p className="card-text">{campaign.description}</p>
                                <a href="#" className="btn btn-primary mt-auto">See More</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CampaignCarousel;
