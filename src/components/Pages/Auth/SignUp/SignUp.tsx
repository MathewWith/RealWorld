import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import registration from "src/store/actions/auth";
import './SignUp.scss'

const SignUp = ({registration}: {registration: any}) => {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function stopDefAction(evt: any) {
    evt.preventDefault();
  }
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
            stopDefAction(e);
            console.log('hi');
            
            registration({ userName, email, password });
          }}
        >
          Sign up
        </button>
      </form>
    </div>
  );
};


export default connect(null, registration)(SignUp)