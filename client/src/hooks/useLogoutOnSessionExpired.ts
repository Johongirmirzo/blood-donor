import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {logoutUser} from '../redux/auth'
import { removeDonorFromStorage, removeToken } from '../utils/localStorage'
import API from "../api/index";

export const useLogoutOnSessionExpired = () => {
    const dispatch = useDispatch();
    const [isSessionExpired, setIsSessionExpired] = useState(false)
    API.interceptors.response.use(response => response, error =>{
        if(error?.response?.data?.isLoginRequired) {
            removeDonorFromStorage();
            removeToken();
            setIsSessionExpired(true)
            dispatch(logoutUser({}))
        }
        return Promise.reject(error)
    })
  return isSessionExpired; 
}

