import Tag from "src/components/Tag";

const mockTags = ["welcome", "implementations", "codebaseShow"];

export const PopularTags = () => {
  return (
    <div className="tags">
      <p className="tags__title">Popular Tags</p>
      <div className="tags__content">
        {mockTags.map((item: string) => (
          <Tag key={item} tag={item} />
        ))}
      </div>
    </div>
  );
};
