import axios from "axios";

const baseURL = process.env.NODE_ENV === 'production'?process.env.REACT_APP_API_URL_PRODUCTION : process.env.REACT_APP_API_URL
console.log(baseURL, process.env.NODE_ENV, process.env.REACT_APP_API_URL_PRODUCTION , process.env.REACT_APP_API_URL);

export const $host = axios.create({
    baseURL: baseURL || 'http://localhost:5000/'
})

