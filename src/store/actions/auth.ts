import axios from "axios"
import { LoginProps, RegistrationProps } from "src/types/AuthTypes"



export const registration = ({userName, email, password}: RegistrationProps) => {
    return async (dispatch: any) => {
        await axios.post('https://api.realworld.io/api/users', {userName, email, password})
    }
}

export const login = ({email, password}: LoginProps) => {
    return async (dispatch: any) => {
        const response = await axios.post('https://api.realworld.io/api/users/login', {email, password})
        dispatch({type: 'LOGIN', payload: true})
        // localStorage.setItem("JWT", response.data.token)
    }
}