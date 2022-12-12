const removeDonorFromStorage = ()=>{
    localStorage.removeItem("persist:donor");
}
const getSessionExpiredMessage = ()=>{
    return localStorage.getItem("donor-session-expired")
}
const removeSessionExpiredMessage = ()=>{
    localStorage.removeItem("donor-session-expired")
}
const setSessionExpiredMessage = ()=>{
    localStorage.setItem("donor-session-expired", "Session is expired! Please login!")
}

export {
    removeDonorFromStorage,
    getSessionExpiredMessage,
    removeSessionExpiredMessage,
    setSessionExpiredMessage
}