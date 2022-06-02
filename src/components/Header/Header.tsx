import { Link } from "react-router-dom";
import { useTypedSelector } from "src/hooks/useTypedSelector";

export const Header = () => {
  const data: any = useTypedSelector((state) => state.user);
  return (
    <div className="header">
      <Link className="header__logo" to={"/"}>
        conduit
      </Link>
      {data.authProfile.username !== '' ? 
        (<ul className="header__nav">
        <li>
          <Link className="header__nav--item" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="header__nav--item" to={"/login"}>
          New Article
          </Link>
        </li>
        <li>
          <Link className="header__nav--item" to={"/register"}>
            Settings
          </Link>
        </li>
        <li>
            <Link className="header__nav--item" to={`/profile/${data.authProfile.username}`}>
              {data.authProfile.username}
            </Link>
          </li>
        </ul>) :
        (<ul className="header__nav">
        <li>
          <Link className="header__nav--item" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="header__nav--item" to={"/login"}>
            Sing in
          </Link>
        </li>
        <li>
          <Link className="header__nav--item" to={"/register"}>
            Sing up
          </Link>
        </li>
        </ul>)
    }
    </div>
  );
};
