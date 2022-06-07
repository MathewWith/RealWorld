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
                isLoggedIn: true
            }
        case AuthActionTypes.AUTH_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}