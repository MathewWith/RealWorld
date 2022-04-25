import Tag from "src/components/Tag";
import { useTypedSelector } from "src/hooks/useTypedSelector";

const mockTags = ["welcome", "implementations", "codebaseShow"];

export const PopularTags = () => {
  const data: any = useTypedSelector(state => state.articles)
  console.log('tagList', data);
  
  return (
    <div className="tags">
      <p className="tags__title">Popular Tags</p>
      <div className="tags__content">
        {data.tags.map((item: any) => <Tag key={item} tag={item} /> )}
      </div>
    </div>
  );
};
