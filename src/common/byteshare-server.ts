import axios from 'axios'

export const amsServer = axios.create({
    baseURL: "http://ec2-3-141-202-46.us-east-2.compute.amazonaws.com:8888",//"http://localhost:9999", used for local testing-ethan
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
})