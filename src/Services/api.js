import axios from "axios";

export const api = axios.create({
    baseURL: "http://10.100.10.5:3333/"
})
