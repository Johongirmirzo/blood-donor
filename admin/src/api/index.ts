import axios from "axios";
import {BASE_URL} from "../config/endpoints";
import {getToken} from "../utils/localStorage"

const API = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
})

API.interceptors.request.use(request => {
    const token = getToken();
    console.log("Token", token)
    if(token){
        request.headers = {
            ...request.headers,
            Authorization: `Bearer ${token.accessToken}`,
            Refreshtoken: `Bearer ${token.refreshToken}`
        }
    }
    return Promise.resolve(request);
})



export default API;
