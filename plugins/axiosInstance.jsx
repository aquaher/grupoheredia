import axios from "axios";

export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:9001/api/v1'
})