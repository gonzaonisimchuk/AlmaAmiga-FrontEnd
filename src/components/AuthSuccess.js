import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import storage from '../utils/storage';

const AuthSuccess = () => {
    const location = useLocation();
    const navigate = useNavigate();

    React.useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const token = searchParams.get('token');

        if (token) {
            storage.setItem('authToken', token);
            navigate('/');
            window.location.reload();
        } else {
            navigate('/login');
        }
    }, [location, navigate]);

    return (
        <div>
            <h2>Procesando autenticación...</h2>
        </div>
    );
};

export default AuthSuccess;
