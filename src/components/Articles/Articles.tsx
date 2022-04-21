import { Article } from "../Article/Article";
import { ArticleProps } from "src/types/ArticleTypes";
import { useTypedSelector } from "src/hooks/useTypedSelector";

export const Articles = () => {
  const [...data] = useTypedSelector((state) => state.tags);
  console.log(data);

  return (
    <div className="articles--content">
      {data.map((article: ArticleProps) => (
        <Article key={article.title} article={article} />
      ))}
    </div>
  );
};
