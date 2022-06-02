import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { stopDefaultFormAction } from "src/helpers/stopDefaultFormAction";
import { useActions } from "src/hooks/useActions";
import { useTypedSelector } from "src/hooks/useTypedSelector";
import { UserState } from "src/types/UserTypes";

export const AuthForm = ({ authType }: { authType: string }) => {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login, registration } = useActions();
  const auth = useTypedSelector((state) => state.auth);
  return (
    <div className="auth-form">
      {auth.error ? (
        <h1 className="auth-form__error">Something went wrong</h1>
      ) : (
        <form className="auth-form__form">
          {authType === "registration" ? (
            <>
              {" "}
              <h1 className="auth-form__form-label">Sign up</h1>
              <Link to={"/login"} className="auth-form__form-link">
                Have an account?
              </Link>{" "}
            </>
          ) : (
            <>
              {" "}
              <h1 className="auth-form__form-label">Sign in</h1>
              <Link to={"/register"} className="auth-form__form-link">
                Need an account?
              </Link>{" "}
            </>
          )}
          {authType === "registration" ? (
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
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="auth-form__form-btn"
            onClick={(e) => {
              stopDefaultFormAction(e);
              authType === "registration"
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
