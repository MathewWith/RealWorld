import axios from "axios";
import { UserActionTypes } from "src/types/UserTypes";

export const getAuthUser = () => {
  return async (dispatch: any) => {
    if(localStorage.getItem("JWT")) {
      const response = await axios.get(`https://api.realworld.io/api/user`);
    dispatch({ 
        type: UserActionTypes.GET_AUTH_USER, 
        payload: response.data.user 
    });
    }
  };
};

export const getUserProfile = (userName: string) => {
  return async (dispatch: any) => {
    const response = await axios.get(
      `https://api.realworld.io/api/profiles/${userName}`
    );
    dispatch({
      type: UserActionTypes.GET_USER_PROFILE,
      payload: response.data.profile,
    });
  };
};

export const getFavoriteArticles = (userName: string) => {
  return async (dispatch: any) => {
    const response = await axios.get(
      `https://api.realworld.io/api/articles?favorited=${userName}&limit=20&offset=0`
    );
    dispatch({
      type: UserActionTypes.GET_FAVORITE_ARTICLES,
      payload: response.data.articles,
    });
  };
};

export const follow = (userName: string) => {
  return async (dispatch: any) => {
    try {
      const JWT = localStorage.getItem("JWT");
      if (JWT) {
        const response = await axios.post(
          `https://api.realworld.io/api/profiles/${userName}/follow`
        );
        return response.data;
      } else window.location.replace("/register");
    } catch (error) {
      console.log(error);
    }
  };
};
