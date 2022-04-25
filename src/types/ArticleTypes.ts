
export interface ArticleItem {
    img: string,
    author: {username: string},
    createdAt: string,
    favoritesCount: number,
    title: string,
    description: string,
    tagList: string[]
}

export interface ArticlesProps {
    articles: ArticleItem[],
    tags: string[]
}

export enum ArticlesActionTypes {
    GET_ARTICLES = 'GET_ARTICLES',
    GET_DEFAULT_TAGS = 'GET_DEFAULT_TAGS'
}

interface GetArticles {
    type: ArticlesActionTypes.GET_ARTICLES,
    payload: ArticleItem[]
}

interface GetDefaultTags {
    type: ArticlesActionTypes.GET_DEFAULT_TAGS,
    payload: string[]
}

export type ArticleAction = GetArticles | GetDefaultTags