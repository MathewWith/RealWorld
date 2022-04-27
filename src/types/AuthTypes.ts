
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
    LOGIN = 'LOGIN',
    AUTH_ERROR = 'AUTH_ERROR'
}
