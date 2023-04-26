import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica para registrar al usuario
        console.log('Email:', email, 'Password:', password);
    };

    return (
        <div className="register">
            <div className="register-container">
                <h1 className="register-title">Registrarse</h1>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="register-label">
                        Correo electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="register-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="password" className="register-label">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="register-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label htmlFor="confirm-password" className="register-label">
                        Confirmar contraseña
                    </label>
                    <input
                        type="password"
                        id="confirm-password"
                        className="register-input"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="button button-primary register-button">
                        Registrarse
                    </button>
                </form>
                <p className="register-login">
                    ¿Ya tienes una cuenta?{' '}
                    <Link to="/login" className="register-login-link">
                        Inicia sesión aquí
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
