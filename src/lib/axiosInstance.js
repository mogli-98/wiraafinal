import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_KEY,
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
});

export default axiosInstance;


