import { Link } from "react-router-dom";
import "./Article.scss";
import { AiFillHeart } from "react-icons/ai";
import { ArticleItem, ArticlesProps } from "src/types/ArticleTypes";
import { useActions } from "src/hooks/useActions";
import { useTypedSelector } from "src/hooks/useTypedSelector";

export const Article = ({ article }: { article: ArticleItem }) => {
  const { getUserProfile, getUserArticles, putLike } = useActions();
  const data: ArticlesProps = useTypedSelector((state) => state.articles)
  const likesClasses = data.isLikeLoadingActive ? "content-user__likes--loading" : "content-user__likes"
  return (
    <div className="article-item">
      <div className="article-item__content-user">
        <div className="content-user__info">
          <img src={article.author.image} alt={article.author.username} />
          <div className="content-user__info-description">
            <Link
              to={`/profile/${article.author.username}`}
              className="link"
              onClick={() => {
                getUserArticles(article.author.username);
              }}
            >
              {article.author.username}
            </Link>
            <p>{article.createdAt}</p>
          </div>
        </div>
        <button className={likesClasses} style={data.likesCount > 0 ? {backgroundColor:'#5CB85C'} : undefined} onClick={() => putLike(article.title)}>
          <AiFillHeart />
          {data.likesCount > 0 ? data.likesCount : article.favoritesCount}
        </button>
      </div>
      <div className="article-item__content-description">
        <button>
          <h2>{article.title}</h2>
        </button>
        <p>{article.description}</p>
      </div>
      <div className="article-item__content-info">
        <button>Read more...</button>
        <div>
          {article.tagList.map((tag: string) => (
            <div className="article-item__content-info--tag" key={tag}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
