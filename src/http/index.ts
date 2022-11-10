import axios from "axios";

console.log(process.env.REACT_APP_API_URL);
export const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/'
})

