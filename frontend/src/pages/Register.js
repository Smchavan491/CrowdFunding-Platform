import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    campaignTitle: "",
    amount: "",
    otherRequirements: "",
    date: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    state: "",
    city: "",
    websiteLink: "",
    campaignDescription: "",
    aboutNGO: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/users/register", formData);
      alert(response.data.message);
      navigate("/login");
    } catch (error) {
      console.error("Registration Failed:", error);
      alert(error.response?.data?.message || "Registration failed!");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/images/img6 (1).jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container p-5 shadow-lg rounded w-75" style={{ backgroundColor: "#333", color: "#fff" }}>
        <h2 className="text-center mb-1">Registration Form</h2>
        <p className="text-center mb-3" style={{ color: "#ccc", fontSize: "0.9rem" }}>Create Account</p>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Campaign Title</label>
              <input type="text" name="campaignTitle" className="form-control" placeholder="Enter campaign title" onChange={handleChange} required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Amount</label>
              <input type="number" name="amount" className="form-control" placeholder="Enter amount" onChange={handleChange} required />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Other Requirements</label>
              <input type="text" name="otherRequirements" className="form-control" placeholder="Specify requirements" onChange={handleChange} />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Date</label>
              <input type="date" name="date" className="form-control" onChange={handleChange} required />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Mobile Number</label>
              <input type="tel" name="mobileNumber" className="form-control" placeholder="Enter mobile number" onChange={handleChange} required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" name="email" className="form-control" placeholder="Enter email address" onChange={handleChange} required />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Password</label>
              <input type="password" name="password" className="form-control" placeholder="Enter password" onChange={handleChange} required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Confirm Password</label>
              <input type="password" name="confirmPassword" className="form-control" placeholder="Confirm password" onChange={handleChange} required />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">State</label>
              <input type="text" name="state" className="form-control" placeholder="Enter state" onChange={handleChange} required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">City</label>
              <input type="text" name="city" className="form-control" placeholder="Enter city" onChange={handleChange} required />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Website Link (if applicable)</label>
            <input type="url" name="websiteLink" className="form-control" placeholder="Enter website link" onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Description About Campaign</label>
            <textarea name="campaignDescription" className="form-control" rows="2" placeholder="Describe the campaign" onChange={handleChange} required></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">About NGO</label>
            <textarea name="aboutNGO" className="form-control" rows="2" placeholder="Provide details about the NGO" onChange={handleChange} required></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary w-50">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
