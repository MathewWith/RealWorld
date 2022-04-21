

export interface AuthAction {
    type: string,
    payload: any
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

export interface State {
    isLoggedIn: boolean
}
