import axios from "axios"
import { ArticlesActionTypes } from "src/types/ArticleTypes";


export const sortArticles = (payload: any) => {
    return async (dispatch: any) => {
        const response = await axios.get(`https://api.realworld.io/api/articles?tag=${payload}&limit=20&offset=0`);
        dispatch({
            type: ArticlesActionTypes.SORT_ARTICLES_BY_TAG,
            payload: response.data.articles
        })
        dispatch({
            type: ArticlesActionTypes.ADD_ACTIVE_TAG,
            payload
        })
    }
}

export const getArticles = () => {
    return async (dispatch: any) => {
        const response = await axios.get('https://api.realworld.io/api/articles?limit=20&offset=0')
        dispatch({type: 'GET_ARTICLES', payload: response.data.articles})
    } 
}

export const getDefTags = () => {
    return async (dispatch: any) => {
        const response = await axios.get('https://api.realworld.io/api/tags')
        console.log('getDef ',response.data.tags);
        
         dispatch({type: 'GET_DEFAULT_TAGS', payload: response.data.tags})
    }
}
