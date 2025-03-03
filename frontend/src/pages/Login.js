import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const createBubbles = () => {
      const bubbleContainer = document.querySelector(".bubble-container");
      bubbleContainer.innerHTML = "";
      for (let i = 0; i < 20; i++) {
        let bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDuration = `${Math.random() * 5 + 3}s`;
        bubbleContainer.appendChild(bubble);
      }
    };
    createBubbles();
  }, []);

  const validateForm = () => {
    let errors = {};
    if (!email.includes("@")) errors.email = "Invalid email format";
    if (password.length < 6) errors.password = "Password must be at least 6 characters";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const loginUser = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        alert("Login Successful!");
        navigate("/dashboard");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    await loginUser(email, password);
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src="/images/img6 (1).jpg" alt="Auth Illustration" className="background-img" />
        <div className="bubble-container"></div>
        <h1 className="floating-text">Welcome Back</h1>
      </div>
      <div className="auth-form small-card">
        <div className="heading-box">
          <h3 className="text-center">Login Account</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email: example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password: ********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <small className="text-danger">{errors.password}</small>}
          </div>
          <button type="submit" className="btn btn-primary w-100" disabled={!email || !password}>
            Login
          </button>
        </form>
        <p className="text-center small-text">
          Don't have an account? {" "}
          <button className="btn btn-link p-0" onClick={() => navigate("/register")}>
            Register
          </button>
        </p>
      </div>
      <style>{`
        .login-container {
          display: flex;
          height: 100vh;
        }
        .image-container {
          flex: 1;
          position: relative;
          overflow: hidden;
        }
        .background-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .bubble-container {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
        .bubble {
          position: absolute;
          width: 20px;
          height: 20px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          animation: floatBubble ease-in infinite;
        }
        @keyframes floatBubble {
          0% { transform: translateY(100vh); opacity: 0.6; }
          100% { transform: translateY(-10vh); opacity: 0; }
        }
        .floating-text {
          position: absolute;
          top: 20%;
          left: 50%;
          transform: translateX(-50%);
          font-size: 2rem;
          color: white;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
        }
        .auth-form {
          flex: 0.5;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          background: black;
          color: white;
        }
        .heading-box {
          background-color: #ff1a00;
          padding: 10px;
          text-align: center;
          font-size: 1.5rem;
          font-weight: bold;
          border-radius: 5px;
          margin-bottom: 20px;
          color: black;
        }
        .small-text {
          text-transform: lowercase;
        }
      `}</style>
    </div>
  );
};

export default LoginForm;
