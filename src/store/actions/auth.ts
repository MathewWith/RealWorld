import axios from "axios";
import { Dispatch } from "redux";
import { AuthAction, AuthActionTypes, LoginProps, RegistrationProps } from "src/types/AuthTypes";


export const registration = ({
  userName,
  email,
  password,
}: RegistrationProps) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    const user = { username: userName, email, password };
    try{
      await axios.post("https://api.realworld.io/api/users", { user });
    }catch (error) {
      dispatch({
        type: AuthActionTypes.AUTH_ERROR,
        payload: true
      })
    }
    
  };
};

export const login = ({
  email,
  password,
}: LoginProps) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    const user = { email, password };
    try{
      const response = await axios.post(
        "https://api.realworld.io/api/users/login",
        { user }
      );
      dispatch({type: "LOGIN", payload: true})
      console.log('token >> ', response.data.user.token);
      localStorage.setItem("JWT", response.data.user.token);
      window.location.replace('/')
      return response.data
    }catch (error) {
      dispatch({
        type: AuthActionTypes.AUTH_ERROR,
        payload: true
      })
    }
    
  };
};

// window.location.assign(`/profile/${response.data.user.username}`)