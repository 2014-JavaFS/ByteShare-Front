import axios from 'axios'

export const amsServer = axios.create({
    baseURL: "http://ec2-3-141-202-46.us-east-2.compute.amazonaws.com:9999",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
})