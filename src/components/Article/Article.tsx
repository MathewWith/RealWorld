import { Link } from "react-router-dom";
import "./Article.scss";
import { AiFillHeart } from "react-icons/ai";
import { ArticleProps } from "src/types/ArticleTypes";

export const Article = ({ article }: { article: ArticleProps }) => {
  return (
    <div className="article">
      <div className="article__content-user">
        <div className="content-user__info">
          <img
            src="https://api.realworld.io/images/demo-avatar.png"
            alt={article.img}
          />
          <div className="content-user__info-box">
            <Link to={""} className="link">
              {article.userName}
            </Link>
            <p>{article.date}</p>
          </div>
        </div>
        <div className="content-user__likes">
          <AiFillHeart />
          {article.likes}
        </div>
      </div>
      <div className="article__content-description">
        <h2>{article.title}</h2>
        <p>{article.description}</p>
      </div>
      <div className="article__content-info">
        <button>Read more...</button>
        <div>{article.tags}</div>
      </div>
    </div>
  );
};
