import { Article } from "../Article/Article";
import { ArticleProps } from "src/types/ArticleTypes";
import { useTypedSelector } from "src/hooks/useTypedSelector";

interface ArticlesData {
  articles: any[],
  articlesCount: number
}

export const Articles = () => {
  const data: any = useTypedSelector((state) => state.articles);
  console.log('data >>>', data.articles);

  return (
    <div className="articles--content">
      {data.articles.map((article: any) => (
        <Article key={article.title} article={article} />
      ))}
    </div>
  );
};
