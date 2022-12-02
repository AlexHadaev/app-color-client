import axios from "axios"

const baseURL = window.location.hostname !== 'localhost'?process.env.REACT_APP_API_URL_PRODUCTION : process.env.REACT_APP_API_URL
export const $host = axios.create({
    baseURL: baseURL || 'http://localhost:5000/'
})

