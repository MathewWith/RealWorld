import { useTypedSelector } from "src/hooks/useTypedSelector";
import { UserState } from "src/types/UserTypes";
import { AiOutlinePlus } from "react-icons/ai";
import {IoIosSettings} from 'react-icons/io'
import Article from "../Article";
import { useActions } from "src/hooks/useActions";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { ArticleItem } from "src/types/ArticleTypes";

interface dataType {
  articles: ArticleItem[],
  userArticles: ArticleItem[]
}

export const UserProfile = () => {
  const obj: any = {
    true: "articles",
    false: "userArticles",
  };
  const datA: any = {
    articles: useTypedSelector(
      ({ articles }: any) => articles.favoriteArticles
    ),
    userArticles: useTypedSelector(
      ({ articles }: any) => articles.userArticles
    ),
  };
  const navigate = useLocation();
  const userName = navigate.pathname.slice(9);
  const user: UserState = useTypedSelector((state) => state.user);
  const {
    getArticles,
    follow,
    getFavoriteArticles,
    getUserProfile,
    getUserArticles,
  } = useActions();
  useEffect(() => {
    getFavoriteArticles(userName);
    getUserArticles(userName);
    getUserProfile(userName);
  }, [navigate.pathname]);
  const [activeToggle, setActiveToggle] = useState<any>(false);
  let buttonClass = activeToggle
    ? "feed-toggle__button-none"
    : "feed-toggle__button";
  let activeTagClass = activeToggle
    ? "feed-toggle__active-tag"
    : "feed-toggle__active-tag--none";

  return (
    <div className="user-profile">
      <div className="user-info">
        <img
          className="user-info__image"
          src={user.profile.image}
          alt={`user-${user.profile.username}`}
        />
        <h4 className="user-info__name">{user.profile.username}</h4>
        <button
          className="user-info__btn-follow"
          onClick={() => follow(user.profile.username)}
        >
          {user.authProfile.username === userName ? (
            <>
            <IoIosSettings className="user-info__btn-follow--icon" />
            {`Edit Profile Settings`}
            </>
          ) : (
            <>
            <AiOutlinePlus className="user-info__btn-follow--icon" />
            {`Follow ${user.profile.username}`}
            </>
          )}
          
        </button>
      </div>
      <div className="user-articles">
        <div className="feed-toggle">
          <button
            className={buttonClass}
            onClick={() => {
              getArticles();
              setActiveToggle((prev: any) => !prev);
            }}
          >
            My Articles
          </button>
          <button
            className={activeTagClass}
            onClick={() => {
              setActiveToggle((prev: any) => !prev);
            }}
          >
            Favorite Articles
          </button>
        </div>
        {datA[obj[activeToggle]].map((article: ArticleItem) => (
          <Article key={article.title} article={article} />
        ))}
        {(!datA.articles.length && activeToggle) ||
        (!datA.userArticles.length && !activeToggle) ? (
          <span>No articles are here... yet</span>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};
