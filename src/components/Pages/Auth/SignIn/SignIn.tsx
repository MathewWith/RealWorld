import { useState } from "react";
import { Link } from "react-router-dom";
import { useActions } from "src/components/hooks/useAction";
import { stopDefAction } from "src/helpers/stopDefAction";
import './SignIn.scss'

export const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const {login} = useActions()

  
  return (
    <div className="sign-in">
      <form className="sign-in__form">
        <h1 className="sign-in__form-label">Sign in</h1>
        <Link to={"/sign-up"} className="sign-in__form-link">
          Need an account?
        </Link>
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
          className="sign-in__form-btn"
          onClick={(e) => {
            stopDefAction(e);
            login({email, password});
          }}
        >
          Sign in
        </button>
      </form>
    </div>
  );
};