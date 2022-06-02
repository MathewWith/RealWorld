import { UserAction, UserActionTypes, UserState } from "src/types/UserTypes";

const initialState: UserState = {
  profile: {
    username: "",
    bio: null,
    image: "",
    following: false,
  },
  authProfile: {
    email: '',
    token: null,
    username: '',
    bio: '',
    image: '',
  },
};

export const user = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case UserActionTypes.GET_USER_PROFILE:
      console.log("userProfile >> ", action.payload);
      return {
        ...state,
        profile: action.payload,
      };
    case UserActionTypes.GET_USER_ARTICLES:
      return {
        ...state,
        userArticles: action.payload,
      };
    case UserActionTypes.GET_AUTH_USER:
      return {
        ...state,
        authProfile: action.payload,
      };
    default:
      return state;
  }
};
