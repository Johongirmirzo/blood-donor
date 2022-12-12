interface ILoginData {
    email: string;
    password: string;
    rememberMe: boolean;
}   




const getAdminLoginData = ()=>{
    return JSON.parse(
        localStorage.getItem("login-remember-pharmacist") || "{}"
      )
}

const setAdminLoginData = (loginData: ILoginData)=>{
    localStorage.setItem("admin-login-data", JSON.stringify(loginData))
}
const removeAdminLoginData = ()=>{
    localStorage.removeItem("admin-login-data")
}
const removeAdminFromStorage = ()=>{
    localStorage.removeItem("persist:admin");
}
const getSessionExpiredMessage = ()=>{
    return localStorage.getItem("session-expired")
}
const removeSessionExpiredMessage = ()=>{
    localStorage.removeItem("session-expired")
}
const setSessionExpiredMessage = ()=>{
    localStorage.setItem("session-expired", "Session is expired! Please login!")
}

export {
    getAdminLoginData,
    setAdminLoginData,
    removeAdminLoginData,
    removeAdminFromStorage,
    getSessionExpiredMessage,
    removeSessionExpiredMessage,
    setSessionExpiredMessage
}