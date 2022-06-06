export enum UserActionTypes {
    GET_USER_PROFILE = 'GET_USER_PROFILE',
    GET_USER_ARTICLES = 'GET_USER_ARTICLES',
    GET_FAVORITE_ARTICLES = 'GET_FAVORITE_ARTICLES',
    GET_AUTH_USER = 'GET_AUTH_USER',
    FOLLOW_USER = 'FOLLOW_USER',
    UNFOLLOW_USER = 'UNFOLLOW_USER'
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
}

export interface UserAction {
    type: string,
    payload: UserItem
}