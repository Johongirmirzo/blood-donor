interface ILoginData {
    email: string;
    password: string;
    rememberMe: boolean;
}   

const getToken = ()=>{
    return JSON.parse(localStorage.getItem("admin-token") || "null")
}
const setToken = (accessToken: string, refreshToken: string)=>{
    localStorage.setItem(
        "admin-token",
        JSON.stringify({
          accessToken,
          refreshToken,
        })
      );
}
const removeToken = ()=>{
    localStorage.removeItem("admin-token")
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

export {
    getToken,
    setToken,
    removeToken,
    getAdminLoginData,
    setAdminLoginData,
    removeAdminLoginData,
    removeAdminFromStorage,
}