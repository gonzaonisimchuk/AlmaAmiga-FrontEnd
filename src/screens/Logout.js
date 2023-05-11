import React from 'react';
import { useNavigate } from 'react-router-dom';
import storage from '../utils/storage';
import './Logout.css';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        storage.removeItem('authToken'); // eliminar el token de autenticación
        navigate('/'); // redirigir al usuario a la página de inicio de sesión
        window.location.reload();
    };

    return (
        <div className="logout">
            <button onClick={handleLogout} className="button button-primary logout-button">
                Cerrar sesión
            </button>
        </div>
    );
};

export default Logout;
