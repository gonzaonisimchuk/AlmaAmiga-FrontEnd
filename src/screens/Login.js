import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica para autenticar al usuario
        console.log('Email:', email, 'Password:', password);
    };

    return (
        <div className="login">
            <div className="login-container">
                <h1 className="login-title">Iniciar sesión</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="login-label">
                        Correo electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="login-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="password" className="login-label">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="login-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="button button-primary login-button">
                        Iniciar sesión
                    </button>
                </form>
                <p className="login-register">
                    ¿No tienes una cuenta?{' '}
                    <Link to="/register" className="login-register-link">
                        Regístrate aquí
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
