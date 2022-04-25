import { Article } from "../Article/Article";
import { ArticleItem, ArticlesProps } from "src/types/ArticleTypes";
import { useTypedSelector } from "src/hooks/useTypedSelector";

export const Articles = () => {
  const data: ArticlesProps = useTypedSelector((state) => state.articles);
  return (
    <div className="articles--content">
      {data.articles.map((article: ArticleItem) => (
        <Article key={article.title} article={article} />
      ))}
    </div>
  );
};
