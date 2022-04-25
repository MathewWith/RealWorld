import { AuthAction, AuthActionTypes } from "src/types/AuthTypes";

const initialState = {
    isLoggedIn: true
}

export const auth = (state = initialState, action: AuthAction) => {
    switch(action.type){
        case AuthActionTypes.LOGIN:
            return action.payload;
        default:
            return state
        
    }
}