import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <nav className="header__menu">
        <Link className="header__menu--logo" to={"/"}>
          conduit
        </Link>
          <ul className="header__menu--nav">
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
      </nav>
    </div>
  );
};
