import { Article } from "../Article/Article"
import {ArticleProps} from "src/types/ArticleTypes"
import { useTypedSelector } from "src/hooks/useTypedSelector"


export const Articles = () => {
    const data = useTypedSelector((state) => state.articles.articles)
    return (
        <div className="articles-container">
            {data.map((article: ArticleProps) => <Article key={article.title} article={article}/>)}
        </div>
    )
}