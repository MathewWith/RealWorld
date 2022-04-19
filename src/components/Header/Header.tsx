import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__nav">
        <Link className="header__nav--logo" to={"/"}>
          conduit
        </Link>
        <ul className="header__nav--items">
          <li>
            <Link className="nav-item" to={"/"}>
              Home
            </Link>
          </li>

          <li>
            <Link className="nav-item" to={"/sign-in"}>
              Sign in
            </Link>
          </li>
          <li>
            <Link className="nav-item" to={"/sign-up"}>
              Sing up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
