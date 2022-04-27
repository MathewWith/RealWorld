import { Link } from "react-router-dom";
import "./Article.scss";
import { AiFillHeart } from "react-icons/ai";
import { ArticleItem } from "src/types/ArticleTypes";

export const Article = ({ article }: { article: ArticleItem }) => {
  return (
    <div className="article-item">
      <div className="article-item__content-user">
        <div className="content-user__info">
          <img src={article.author.image} alt={article.author.username} />
          <div className="content-user__info-description">
            <Link to={""} className="link">
              {article.author.username}
            </Link>
            <p>{article.createdAt}</p>
          </div>
        </div>
        <div className="content-user__likes">
          <AiFillHeart />
          {article.favoritesCount}
        </div>
      </div>
      <div className="article-item__content-description">
        <button><h2>{article.title}</h2></button>
        <p>{article.description}</p>
      </div>
      <div className="article-item__content-info">
        <button>Read more...</button>
        <div>
          {article.tagList.map((tag: string) => (
            <div className="article-item__content-info--tag">{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
