
export interface AuthAction {
    type: string,
    payload: boolean
}

export interface RegistrationProps {
    userName: string,
    email: string,
    password: string,
}

export interface LoginProps {
    email: string,
    password: string,
}

export enum AuthActionTypes {
    LOGIN = 'LOGIN'
}