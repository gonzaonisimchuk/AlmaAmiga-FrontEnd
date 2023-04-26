import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.almaamiga.com', // Reemplaza con la URL de tu API real
});

export default api;
