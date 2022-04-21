import axios from "axios"
import { LoginProps, RegistrationProps } from "src/types/AuthTypes"

export const registration = ({userName, email, password}: RegistrationProps) => {
    return async (dispatch: any) => {
        const user = {username: userName, email, password}
        await axios.post('https://api.realworld.io/api/users', {user})
    }
}

export const login = ({email, password}: LoginProps) => {
    return async (dispatch: any) => {
        const user = {email, password}
        const response = await axios.post('https://api.realworld.io/api/users/login', {user})
        console.log('response>>>',response);
        
        // localStorage.setItem("JWT", response.data.token)
    }
}
