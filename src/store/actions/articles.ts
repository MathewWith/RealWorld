import axios from "axios";
import { ArticlesActionTypes } from "src/types/ArticleTypes";

export const getUserArticles = (userName: string) => {
  return async (dispatch: any) => {
    const response = await axios.get(
      `https://api.realworld.io/api/articles?author=${userName}&limit=20&offset=0`
    );
    dispatch({
      type: ArticlesActionTypes.GET_USER_ARTICLES,
      payload: response.data.articles,
    });
  };
};

export const getYourFeedArticles = () => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get(
        `https://api.realworld.io/api/articles/feed?limit=20&offset=0`
      );
      dispatch({
        type: ArticlesActionTypes.GET_YOUR_FEED_ARTICLES,
        payload: response.data.articles,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const sortArticlesByTag = (payload: any) => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get(
        `https://api.realworld.io/api/articles?tag=${payload}&limit=20&offset=0`
      );
      dispatch({
        type: ArticlesActionTypes.SORT_ARTICLES_BY_TAG,
        payload: response.data.articles,
      });
      dispatch({
        type: ArticlesActionTypes.ADD_ACTIVE_TAG,
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getArticles = () => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get(
        "https://api.realworld.io/api/articles?limit=20&offset=0"
      );
      dispatch({
        type: ArticlesActionTypes.GET_ARTICLES,
        payload: response.data.articles,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDefaultTags = () => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get("https://api.realworld.io/api/tags");
      dispatch({
        type: ArticlesActionTypes.GET_DEFAULT_TAGS,
        payload: response.data.tags,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getFavoriteArticles = (userName: any) => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get(
        `https://api.realworld.io/api/articles?favorited=${userName}&limit=20&offset=0`
      );
      dispatch({
        type: ArticlesActionTypes.GET_FAVORITE_ARTICLES,
        payload: response.data.articles,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const putLike = (slug: string) => {
  return async (dispatch: any) => {
    try {
      const JWT = localStorage.getItem("JWT");
      if (JWT) {
        dispatch({
          type: ArticlesActionTypes.SET_LIKE_LOADING,
          payload: true,
        });
        const response = await axios.post(
          `https://api.realworld.io/api/articles/${slug}/favorite`
        );
        dispatch({
          type: ArticlesActionTypes.PUT_LIKE,
          payload: response.data,
        });
      } else window.location.replace("/register");
    } catch (error) {
      console.log(error);
    }
  };
};
