
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


export interface AuthState {
    isLoggedIn: boolean,
    error: boolean
}

export enum AuthActionTypes {
    REGISTRATION_ERROR = 'REGISTRATION_ERROR',
    LOGIN = 'LOGIN',
    LOGIN_ERROR = 'LOGIN_ERROR'
}
