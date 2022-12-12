import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {removeAdmin} from '../redux/admin'
import {removeAdminFromStorage, setSessionExpiredMessage} from '../utils/localStorage'
import API from "../api/index";

export const useLogoutOnSessionExpired = () => {
    const dispatch = useDispatch();
    const [isSessionExpired, setIsSessionExpired] = useState(false)
    API.interceptors.response.use(response => response, error =>{
        if(error?.response?.data?.isLoginRequired) {
            removeAdminFromStorage();
            setSessionExpiredMessage();
            setIsSessionExpired(true)
            dispatch(removeAdmin({}))
        }
        return Promise.reject(error)
    })
  return isSessionExpired; 
}

