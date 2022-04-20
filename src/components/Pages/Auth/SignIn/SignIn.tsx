import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import login from "src/store/actions/auth";
import './SignIn.scss'

export const SignIn = ({login}: {login: any}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function stopDefAction(evt: any) {
    evt.preventDefault();
  }
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
            console.log('log');
            
            login({ email, password });
          }}
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default connect(null, login)(SignIn)