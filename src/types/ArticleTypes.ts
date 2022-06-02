export interface ArticleItem {
  author: { username: string; image: string };
  createdAt: string;
  favoritesCount: number;
  title: string;
  description: string;
  tagList: string[];
}

export interface ArticlesProps {
  articles: ArticleItem[];
  tags: string[];
  activeTag: string;
  favoriteArticles: ArticleItem[];
  isLikeLoadingActive: boolean;
  likesCount: number,
  userArticles: ArticleItem[]
}

export enum ArticlesActionTypes {
  GET_ARTICLES = "GET_ARTICLES",
  GET_DEFAULT_TAGS = "GET_DEFAULT_TAGS",
  SORT_ARTICLES_BY_TAG = "SORT_ARTICLES_BY_TAG",
  PUT_LIKE = "PUT_LIKE",
  ADD_ACTIVE_TAG = "ADD_ACTIVE_TAG",
  GET_USER_ARTICLES = "GET_USER_ARTICLES",
  GET_FAVORITE_ARTICLES = "GET_FAVORITE_ARTICLES",
  SET_LIKE_LOADING = "SET_LIKE_LOADING",
}

interface SetLikeLoading {
  type: ArticlesActionTypes.SET_LIKE_LOADING;
  payload: boolean;
}

interface PutLike {
  type: ArticlesActionTypes.PUT_LIKE;
  payload: ArticleItem;
}

interface GetFavoriteArticles {
  type: ArticlesActionTypes.GET_FAVORITE_ARTICLES;
  payload: ArticleItem[];
}

interface GetUserArticles {
  type: ArticlesActionTypes.GET_USER_ARTICLES;
  payload: ArticleItem[];
}

interface GetArticles {
  type: ArticlesActionTypes.GET_ARTICLES;
  payload: ArticleItem[];
}

interface SortArticlesByTag {
  type: ArticlesActionTypes.SORT_ARTICLES_BY_TAG;
  payload: ArticleItem;
}

interface GetDefaultTags {
  type: ArticlesActionTypes.GET_DEFAULT_TAGS;
  payload: string[];
}

interface AddActiveTag {
  type: ArticlesActionTypes.ADD_ACTIVE_TAG;
  payload: string;
}

export type ArticleAction =
  | GetArticles
  | GetDefaultTags
  | SortArticlesByTag
  | AddActiveTag
  | GetUserArticles
  | GetFavoriteArticles
  | PutLike
  | SetLikeLoading;
