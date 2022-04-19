import { AuthAction } from "src/types/AuthTypes";

const initialState = {
    isLoggedIn: true
}

export const auth = (state = initialState, action: AuthAction) => {
    switch(action.type){
        case 'LOGIN':
            return action.payload;
        default:
            return state
        
    }
}