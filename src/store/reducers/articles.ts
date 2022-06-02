import { ArticleAction, ArticlesActionTypes } from "src/types/ArticleTypes"

const initialState = {
    articles: [],
    tags: [],
    activeTag: '',
    favoriteArticles: [],
    isLikeLoadingActive: false,
    likesCount: 0,
    userArticles: []
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
        case ArticlesActionTypes.GET_FAVORITE_ARTICLES:
            return {
                ...state,
                favoriteArticles: action.payload
            }
        case ArticlesActionTypes.PUT_LIKE:
            return {
                ...state,
                isLikeLoadingActive: false,
                likesCount: action.payload.favoritesCount
            }
        case ArticlesActionTypes.SET_LIKE_LOADING:
            return {
                ...state,
                isLikeLoadingActive: action.payload
            }
        case ArticlesActionTypes.GET_USER_ARTICLES:
            return {
                ...state,
                userArticles: action.payload,
            };
        default:
            return state
    }
}