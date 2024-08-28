import axios from 'axios'

export const bsServer = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
})