import { useTypedSelector } from "src/hooks/useTypedSelector";
import { UserState } from "src/types/UserTypes";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import Article from "../Article";
import { useActions } from "src/hooks/useActions";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { ArticleItem } from "src/types/ArticleTypes";
import UserProfileButton from "src/components/UserProfileButton";

interface articlesDataType {
  articles: ArticleItem[];
  userArticles: ArticleItem[];
}

export const UserProfile = () => {
  const typeOfArticlesData: any = {
    true: "articles",
    false: "userArticles",
  };
  const articlesData: any = {
    articles: useTypedSelector(
      ({ articles }: any) => articles.favoriteArticles
    ),
    userArticles: useTypedSelector(
      ({ articles }: any) => articles.userArticles
    ),
  };
  const navigate = useLocation();
  const userName: string = navigate.pathname.slice(9);
  const { profile, authProfile }: any = useTypedSelector(({ user }) => user);
  const {
    getArticles,
    follow,
    unfollow,
    getFavoriteArticles,
    getUserProfile,
    getUserArticles,
  } = useActions();
  useEffect(() => {
    const getData = async () => {
      await Promise.all([
        getFavoriteArticles(userName),
        getUserArticles(userName),
        getUserProfile(userName),
      ]);
    };
    getData();
  }, [navigate.pathname, profile.following]);
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
        {}
        <img
          className="user-info__image"
          src={profile.image}
          alt={`user-${profile.username}`}
        />
        <h4 className="user-info__name">{profile.username}</h4>
        <UserProfileButton userName={userName} />
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
        {articlesData[typeOfArticlesData[activeToggle]].map(
          (article: ArticleItem) => (
            <Article key={article.title} article={article} />
          )
        )}
        {(!articlesData.articles.length && activeToggle) ||
        (!articlesData.userArticles.length && !activeToggle) ? (
          <span>No articles are here... yet</span>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};
