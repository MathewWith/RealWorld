import { ArticleItem } from "./ArticleTypes"

export enum UserActionTypes {
    GET_USER_PROFILE = 'GET_USER_PROFILE',
    GET_USER_ARTICLES = 'GET_USER_ARTICLES',
    GET_FAVORITE_ARTICLES = 'GET_FAVORITE_ARTICLES',
    GET_AUTH_USER = 'GET_AUTH_USER'
}

export interface UserItem {
    username: string,
    bio: any,
    image: string,
    following: boolean,
}

export interface AuthUser {
    email: string,
    token: null | string,
    username: string,
    bio: string,
    image: string,
}

export interface UserState {
    profile: UserItem,
    authProfile: AuthUser,
    // userArticles: ArticleItem[]
}

export interface UserAction {
    type: string,
    payload: UserItem
}