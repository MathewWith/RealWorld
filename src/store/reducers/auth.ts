import { AuthAction, AuthActionTypes, AuthState } from "src/types/AuthTypes";

const initialState: AuthState = {
    isLoggedIn: false,
    error: false
}

export const auth = (state = initialState, action: AuthAction): AuthState => {
    switch(action.type){
        case AuthActionTypes.LOGIN:
            return {
                ...state,
                isLoggedIn: action.payload
            }
        case AuthActionTypes.LOGIN_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case AuthActionTypes.REGISTRATION_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}