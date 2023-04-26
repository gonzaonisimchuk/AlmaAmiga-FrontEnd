import React from "react";
import "./UserProfile.css";

const UserProfile = () => {
    // Datos de ejemplo del usuario, reemplaza con los datos reales obtenidos del backend
    const user = {
        name: "Juan Pérez",
        email: "juanperez@example.com",
        profilePicture: "https://via.placeholder.com/150",
    };

    return (
        <div className="user-profile-container">
            <h2>Perfil de usuario</h2>
            <div className="user-profile-card">
                <img
                    src={user.profilePicture}
                    alt="Foto de perfil"
                    className="user-profile-picture"
                />
                <div className="user-profile-details">
                    <div className="user-profile-name">{user.name}</div>
                    <div className="user-profile-email">{user.email}</div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
