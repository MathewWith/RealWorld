
export interface ArticleItem {
    author: {username: string, image: string},
    createdAt: string,
    favoritesCount: number,
    title: string,
    description: string,
    tagList: string[]
}

export interface ArticlesProps {
    articles: ArticleItem[],
    tags: string[],
    activeTag: string
}

export enum ArticlesActionTypes {
    GET_ARTICLES = 'GET_ARTICLES',
    GET_DEFAULT_TAGS = 'GET_DEFAULT_TAGS',
    SORT_ARTICLES_BY_TAG = 'SORT_ARTICLES_BY_TAG',
    ADD_ACTIVE_TAG = 'ADD_ACTIVE_TAG',
}

interface GetArticles {
    type: ArticlesActionTypes.GET_ARTICLES,
    payload: ArticleItem[]
}

interface SortArticlesByTag {
    type: ArticlesActionTypes.SORT_ARTICLES_BY_TAG,
    payload: ArticleItem
}

interface GetDefaultTags {
    type: ArticlesActionTypes.GET_DEFAULT_TAGS,
    payload: string[]
}

interface AddActiveTag {
    type: ArticlesActionTypes.ADD_ACTIVE_TAG,
    payload: string
}

export type ArticleAction = GetArticles | GetDefaultTags | SortArticlesByTag | AddActiveTag
