import { useState } from "react";
import { Link } from "react-router-dom";
import { stopDefaultFormAction } from "src/helpers/stopDefAction";
import { useActions } from "src/hooks/useActions";
import "./SignUp.scss";

export const SignUp = () => {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { registration } = useActions();

  return (
    <div className="sign-up">
      <form className="sign-up__form">
        <h1 className="sign-up__form-label">Sign up</h1>
        <Link to={"/sign-in"} className="sign-up__form-link">
          Have an account?
        </Link>
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="sign-up__form-btn"
          onClick={(e) => {
            stopDefaultFormAction(e);
            registration({ userName, email, password });
          }}
        >
          Sign up
        </button>
      </form>
    </div>
  );
};
