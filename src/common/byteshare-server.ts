import axios from 'axios'

export const bsServer = axios.create({
    baseURL: "http://ec2-3-141-202-46.us-east-2.compute.amazonaws.com:8888",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
})