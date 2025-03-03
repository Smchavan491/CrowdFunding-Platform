import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Logout Functionality
  const handleLogout = () => {
    // Clear authentication data (example: localStorage)
    localStorage.removeItem("authToken"); // Remove token (if used)
    localStorage.removeItem("user"); // Remove user data

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="d-flex" style={{ height: "100vh", backgroundColor: "#000000" }}>
      {/* Sidebar */}
      <div
        className="d-flex flex-column text-white align-items-center"
        style={{
          backgroundColor: "#ff1a00",
          width: isSidebarOpen ? "180px" : "50px",
          transition: "width 0.3s ease",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Sidebar Header */}
        <div className="d-flex align-items-center justify-content-between w-100 p-2">
          <h5 className={`mb-0 w-100 text-center ${isSidebarOpen ? "d-block" : "d-none"}`}>
            Dashboard
          </h5>
          <button
            className="btn btn-light p-1"
            onClick={toggleSidebar}
            style={{ width: "30px", height: "30px" }}
          >
            ☰
          </button>
        </div>
        <hr className="w-100" />

        {/* Sidebar Links */}
        <div className="d-flex flex-column align-items-center w-100" style={{ flexGrow: 1 }}>
          {[
            { icon: "🏠", text: "Home", path: "/" },
            { icon: "📊", text: "Reports", path: "/reports" },
            { icon: "💼", text: "Projects", path: "/projects" },
            { icon: "💳", text: "Payment Process", path: "/payment" },
          ].map((item, index) => (
            <div
              key={index}
              className="d-flex align-items-center text-white p-2 rounded w-100"
              style={{
                textAlign: "center",
                justifyContent: "center",
                flexDirection: isSidebarOpen ? "row" : "column",
                cursor: "pointer",
              }}
              onClick={() => navigate(item.path)}
            >
              <span className="fs-5">{item.icon}</span>
              <span className={isSidebarOpen ? "d-block ms-2 fs-6" : "d-none"}>
                {item.text}
              </span>
            </div>
          ))}

          {/* Logout Option */}
          <div
            className="d-flex align-items-center text-white p-2 rounded w-100"
            style={{
              textAlign: "center",
              justifyContent: "center",
              flexDirection: isSidebarOpen ? "row" : "column",
              cursor: "pointer",
            }}
            onClick={handleLogout}
          >
            <span className="fs-5">🚪</span>
            <span className={isSidebarOpen ? "d-block ms-2 fs-6" : "d-none"}>Logout</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="content flex-grow-1">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg shadow-sm p-2 w-100" style={{ backgroundColor: "#000000" }}>
          <span className="navbar-brand text-white fs-5">Dashboard</span>
          <div className="ms-auto d-flex gap-3">
            {/* Notification Icon */}
            <div
              className="text-white d-flex align-items-center fs-5"
              onMouseEnter={() => setHovered("notification")}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: "pointer" }}
            >
              🔔
              {hovered === "notification" && (
                <span className="ms-2 text-white fs-6">Notification</span>
              )}
            </div>

            {/* Profile Icon */}
            <div
              className="d-flex align-items-center"
              onMouseEnter={() => setHovered("profile")}
              onMouseLeave={() => setHovered(null)}
              onClick={() => navigate("/profile")}
              style={{ cursor: "pointer" }}
            >
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="rounded-circle"
                style={{ width: "40px", height: "40px", border: "2px solid white" }}
              />
              {hovered === "profile" && (
                <span className="ms-2 text-white fs-6">Profile</span>
              )}
            </div>
          </div>
        </nav>

        {/* Cards Section */}
        <div className="container mt-4">
          <div className="row">
            {/* Card 1: Pink */}
            <div className="col-md-4">
              <div className="card mb-3" style={{ backgroundColor: "#ff69b4" }}>
                <div className="card-header text-center">
                  <h3>Project Management</h3>
                </div>
                <div className="card-body">
                  <blockquote className="blockquote text-center">
                    <p>"Innovation distinguishes between a leader and a follower."</p>
                  </blockquote>
                </div>
                <div className="card-footer text-end">Project 1</div>
              </div>
            </div>

            {/* Card 2: Green */}
            <div className="col-md-4">
              <div className="card mb-3" style={{ backgroundColor: "#32cd32" }}>
                <div className="card-header text-center">
                  <h3>Project Management</h3>
                </div>
                <div className="card-body">
                  <blockquote className="blockquote text-center">
                    <p>"Teamwork divides the task and multiplies the success."</p>
                  </blockquote>
                </div>
                <div className="card-footer text-end">Project 1</div>
              </div>
            </div>

            {/* Card 3: Purple */}
            <div className="col-md-4">
              <div className="card mb-3" style={{ backgroundColor: "#9370db" }}>
                <div className="card-header text-center">
                  <h3>Project Management</h3>
                </div>
                <div className="card-body">
                  <blockquote className="blockquote text-center">
                    <p>"Excellence is the gradual result of always striving to do better."</p>
                  </blockquote>
                </div>
                <div className="card-footer text-end">Project 1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
