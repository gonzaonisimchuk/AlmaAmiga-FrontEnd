import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="home-container">
                <h1 className="home-title">Bienvenido a AlmaAmiga</h1>
                <p className="home-subtitle">Tu compañero emocional en línea</p>
                <p className="home-description">
                    AlmaAmiga es una plataforma de bienestar emocional que te ayuda a
                    comprender y mejorar tu estado emocional a través de chatbots
                    terapéuticos, ejercicios de mindfulness, seguimiento del progreso y
                    más.
                </p>
                <div className="home-buttons">
                    <Link to="/login" className="button button-primary">
                        Iniciar sesión
                    </Link>
                    <Link to="/register" className="button button-secondary">
                        Registrarse
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
