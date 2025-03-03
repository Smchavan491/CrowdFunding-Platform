import React, { useState } from "react";
import { FaCamera, FaFolderOpen } from "react-icons/fa"; // Importing icons

const Profile = () => {
    const [user, setUser] = useState({
        role: "", // Admin or Donor
        fullName: "",
        phone: "",
        work: "", // Only for Admin
        amount: "", // Only for Donor
        email: "",
        password: "",
        profileImage: "", // Stores profile image URL
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setUser({ ...user, profileImage: imageUrl });
        }
    };

    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <div className="profile-container">
            <h2 className="profile-title">User Profile</h2>
            <div className="profile-photo-section">
                <label htmlFor="profile-upload">
                    <img 
                        src={user.profileImage || "/images/default-avatar.png"} 
                        alt="Profile" 
                        className="profile-photo"
                    />
                </label>
                <input 
                    type="file" 
                    id="profile-upload" 
                    accept="image/*" 
                    onChange={handleFileUpload} 
                    hidden 
                />
                <div className="upload-options">
                    <FaCamera className="upload-icon" onClick={() => document.getElementById("profile-upload").click()} />
                    <FaFolderOpen className="upload-icon" onClick={() => document.getElementById("profile-upload").click()} />
                </div>
            </div>
            
            <div className="profile-info">
                <div className="profile-field">
                    <label>Full Name:</label>
                    <input type="text" name="fullName" value={user.fullName} onChange={handleInputChange} placeholder="Enter your full name" />
                </div>

                <div className="profile-field">
                    <label>Phone Number:</label>
                    <input type="tel" name="phone" value={user.phone} onChange={handleInputChange} placeholder="Enter your phone number" />
                </div>

                {user.role === "admin" && (
                    <div className="profile-field">
                        <label>Work:</label>
                        <input type="text" name="work" value={user.work} onChange={handleInputChange} placeholder="Enter your work" />
                    </div>
                )}

                {user.role === "donor" && (
                    <div className="profile-field">
                        <label>Donation Amount:</label>
                        <input type="number" name="amount" value={user.amount} onChange={handleInputChange} placeholder="Enter donation amount" />
                    </div>
                )}

                <div className="profile-field">
                    <label>Email:</label>
                    <input type="email" name="email" value={user.email} onChange={handleInputChange} placeholder="Enter your email" />
                </div>
            </div>

            <div className="profile-actions">
                <button onClick={() => setIsEditing(!isEditing)} className="edit-btn">
                    {isEditing ? "Save" : "Edit Profile"}
                </button>
            </div>
        </div>
    );
};

export default Profile;

// Add CSS styles
const styles = `
.profile-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f5f5f5;
    color: black;
}
.profile-title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
}
.profile-photo-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}
.profile-photo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid black;
    cursor: pointer;
}
.upload-options {
    margin-top: 10px;
    display: flex;
    gap: 15px;
}
.upload-icon {
    font-size: 24px;
    color: black;
    cursor: pointer;
}
.profile-info {
    width: 50%;
    margin-top: 20px;
}
.profile-field {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
}
.profile-field label {
    font-weight: bold;
}
.profile-field input {
    padding: 8px;
    border: 1px solid gray;
    border-radius: 5px;
    width: 100%;
}
.profile-actions {
    margin-top: 20px;
}
.edit-btn {
    background-color: black;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}
.edit-btn:hover {
    background-color: gray;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
