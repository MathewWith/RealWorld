import { ArticleAction, ArticlesActionTypes } from "src/types/ArticleTypes"

const initialState = {
    articles: [],
    tags: []
}

export const articles = (state = initialState, action: ArticleAction) => {
    switch(action.type){
        case ArticlesActionTypes.GET_ARTICLES:
            return {
                ...state,
                articles: action.payload
            }  
        case ArticlesActionTypes.GET_DEFAULT_TAGS:
            return {
                ...state,
                tags: action.payload
            }
        default:
            return state
    }
}