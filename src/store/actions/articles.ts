import axios from "axios"


export const getDataForArticles = () => {
    return async (dispatch: any) => {
        const response = await axios.get('https://api.realworld.io/api/articles?limit=20&offset=0')
        dispatch({type: 'GET_ARTICLES', payload: response.data.articles})
    } 
}

