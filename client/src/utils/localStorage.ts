interface ILoginData {
    email: string;
    password: string;
    rememberMe: boolean;
}   

const getToken = ()=>{
    return JSON.parse(localStorage.getItem("donor-token") || "null")
}
const setToken = (accessToken: string, refreshToken: string)=>{
    localStorage.setItem(
        "donor-token",
        JSON.stringify({
          accessToken,
          refreshToken,
        })
      );
}
const removeToken = ()=>{
    localStorage.removeItem("donor-token")
}
const getDonorLoginData = ()=>{
    return JSON.parse(
        localStorage.getItem("login-remember-pharmacist") || "{}"
      )
}
const setDonorLoginData = (loginData: ILoginData)=>{
    localStorage.setItem("donor-login-data", JSON.stringify(loginData))
}
const removeDonorLoginData = ()=>{
    localStorage.removeItem("donor-login-data")
}
const removeDonorFromStorage = ()=>{
    localStorage.removeItem("persist:donor");
}

export {
    getToken,
    setToken,
    removeToken,
    getDonorLoginData,
    setDonorLoginData,
    removeDonorLoginData,
    removeDonorFromStorage,
}