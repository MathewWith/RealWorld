import axios from "axios";
import { Dispatch } from "redux";
import { AuthAction, AuthActionTypes, LoginProps, RegistrationProps } from "src/types/AuthTypes";


const registration = ({
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
        type: AuthActionTypes.REGISTRATION_ERROR,
        payload: true
      })
    }
    
  };
};

const login = ({
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
      localStorage.setItem("JWT", response.data.token)
      return response.data
    }catch (error) {
      dispatch({
        type: AuthActionTypes.LOGIN_ERROR,
        payload: true
      })
    }
    
  };
};

export default { registration, login };
