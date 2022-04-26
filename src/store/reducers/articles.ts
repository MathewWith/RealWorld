import { ArticleAction, ArticlesActionTypes } from "src/types/ArticleTypes"

const initialState = {
    articles: [],
    tags: [],
    activeTag: ''
}

export const articles = (state = initialState, action: ArticleAction) => {
    switch(action.type){
        case ArticlesActionTypes.GET_ARTICLES:
            return {
                ...state,
                articles: action.payload,
                activeTag: ''
            }  
        case ArticlesActionTypes.GET_DEFAULT_TAGS:
            return {
                ...state,
                tags: action.payload
            }
        case ArticlesActionTypes.SORT_ARTICLES_BY_TAG:
            return {
                ...state,
                articles: action.payload
            }
        case ArticlesActionTypes.ADD_ACTIVE_TAG: 
            return {
                ...state,
                activeTag: action.payload
            }
        default:
            return state
    }
}