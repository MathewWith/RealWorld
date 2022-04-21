import { AuthAction, State } from "src/types/AuthTypes";



const initialState: State = {
    isLoggedIn: false
}

export const auth = (state = initialState, action: AuthAction): State => {
    switch(action.type){
        case 'LOGIN':
            return {
                isLoggedIn: action.payload
            }
        default:
            return state
    }
}