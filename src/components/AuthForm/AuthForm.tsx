import React, { useState } from "react";
import { Link } from "react-router-dom";
import { stopDefaultFormAction } from "src/helpers/stopDefaultFormAction";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const AuthForm = ({ flag }: { flag: string }) => {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login, registration } = useActions();
  const auth = useTypedSelector((state) => state.auth);
  return (
    <div className="form-box">
      {auth.error ? (
        <h1 className="form-box__error">Something went wrong</h1>
      ) : (
        <form className="form-box__form">
          {flag === "registration" ? (
            <>
              {" "}
              <h1 className="form-box__form-label">Sign up</h1>
              <Link to={"/login"} className="form-box__form-link">
                Have an account?
              </Link>{" "}
            </>
          ) : (
            <>
              {" "}
              <h1 className="form-box__form-label">Sign in</h1>
              <Link to={"/register"} className="form-box__form-link">
                Need an account?
              </Link>{" "}
            </>
          )}
          {flag === "registration" ? (
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          ) : null}
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
            className="form-box__form-btn"
            onClick={(e) => {
              stopDefaultFormAction(e);
              flag === "registration"
                ? registration({ userName, email, password })
                : login({ email, password });
            }}
          >
            Sign up
          </button>
        </form>
      )}
    </div>
  );
};
