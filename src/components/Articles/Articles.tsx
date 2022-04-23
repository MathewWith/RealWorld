import { Article } from "../Article/Article";
import { ArticleProps } from "src/types/ArticleTypes";
import { useTypedSelector } from "src/hooks/useTypedSelector";

export const Articles = () => {
  const data: any = useTypedSelector((state) => state.articles);
  console.log(data.articles);

  return (
    <div className="articles--content">
      {data.articles.map((article: any) => (
        <Article key={article.title} article={article} />
      ))}
    </div>
  );
};
