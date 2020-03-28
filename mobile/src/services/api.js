import axios from 'axios';

const api = axios.create({
    // Endereço do seu computador
    baseURL: 'http://192.168.0.83:3333'
});

export default api;