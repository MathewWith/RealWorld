import { useActions } from "src/hooks/useActions";

export const Tag = ({ tag }: { tag: any }) => {
  const { sortArticles } = useActions();
  return (
    <button className="tag" onClick={() => sortArticles(tag)}>
      {tag}
    </button>
  );
};
