import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
        <Link className="header__logo" to={"/"}>
          conduit
        </Link>
          <ul className="header__nav">
            <li>
              <Link className="header__nav--item" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="header__nav--item" to={"/login"}>
                Sign in
              </Link>
            </li>
            <li>
              <Link className="header__nav--item" to={"/register"}>
                Sing up
              </Link>
            </li>
          </ul>
    </div>
  );
};
