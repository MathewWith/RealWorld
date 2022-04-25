
const initialState = {
    articles: [],
    tags: []
}

interface TagsAction {
    type: string;
    payload: any
}

export const articles = (state = initialState, action: TagsAction) => {
    switch(action.type){
        case 'GET_ARTICLES':
            return {
                ...state,
                articles: action.payload
            }  
        case 'GET_DEFAULT_TAGS':
            return {
                ...state,
                tags: action.payload
            }
        default:
            return state
    }
}