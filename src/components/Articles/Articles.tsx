import { Article } from "../Article/Article";
import { ArticleItem, ArticlesProps } from "src/types/ArticleTypes";
import { useTypedSelector } from "src/hooks/useTypedSelector";
import "./Articles.scss";
import { useActions } from "src/hooks/useActions";

export const Articles = () => {
  const data: ArticlesProps = useTypedSelector((state) => state.articles);
  const { getArticles } = useActions();
  let buttonClass = data.activeTag
    ? "feed-toggle__button-none"
    : "feed-toggle__button";
  let activeTagClass = data.activeTag
    ? "feed-toggle__active-tag"
    : "feed-toggle__active-tag--none";

  return (
    <div className="articles-content">
      <div className="feed-toggle">
        <button className={buttonClass} onClick={() => getArticles()}>
          Global Feed
        </button>
        <div className={activeTagClass}>
          <div>#</div>
          {data.activeTag}
        </div>
      </div>
      {data.articles.map((article: ArticleItem) => (
        <Article key={article.title} article={article} />
      ))}
    </div>
  );
};
