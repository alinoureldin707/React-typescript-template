import jwt_decode from 'jwt-decode'
import axios from "../../axios"

interface Token {
    exp: number;
}
  

export const isValidToken = (token: string) => {
    if (!token) {
        return false
    }

    const decodedToken = jwt_decode<Token>(token)
    const currentTime = Date.now() / 1000
    return decodedToken.exp > currentTime
}


export const setSession = (token: string | null) => {
    if (token) {
        localStorage.setItem('token', token)
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    } else {
        localStorage.removeItem('token')
        delete axios.defaults.headers.common.Authorization
    }
}