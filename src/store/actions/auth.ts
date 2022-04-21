import axios from "axios";
import { Dispatch } from "redux";
import { AuthAction, LoginProps, RegistrationProps } from "src/types/AuthTypes";

const registration = ({
  userName,
  email,
  password,
}: RegistrationProps) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    const user = { username: userName, email, password };
    await axios.post("https://api.realworld.io/api/users", { user });
  };
};

const login = ({
  email,
  password,
}: LoginProps) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    const user = { email, password };
    const response = await axios.post(
      "https://api.realworld.io/api/users/login",
      { user }
    );
    dispatch({type: "LOGIN", payload: true})
    localStorage.setItem("JWT", response.data.token)
    return response.data
  };
};

export default { registration, login };
