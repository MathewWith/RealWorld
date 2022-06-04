import { useActions } from "src/hooks/useActions";

export const Tag = ({ tag }: { tag: string }) => {
  const { sortArticlesByTag } = useActions();
  return (
    <button className="tag" onClick={() => sortArticlesByTag(tag)}>
      {tag}
    </button>
  );
};
