import Tag from "src/components/Tag";
import { useTypedSelector } from "src/hooks/useTypedSelector";
import { ArticlesProps } from "src/types/ArticleTypes";

export const PopularTags = () => {
  const data: ArticlesProps = useTypedSelector(state => state.articles)
  return (
    <div className="tags">
      <p className="tags__title">Popular Tags</p>
      <div className="tags__content">
        {data.tags.map((item: string) => <Tag key={item} tag={item} /> )}
      </div>
    </div>
  );
};
