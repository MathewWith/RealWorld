import { Article } from "../Article/Article";
import { ArticleItem } from "src/types/ArticleTypes";
import { useTypedSelector } from "src/hooks/useTypedSelector";
import "./Articles.scss";
import { useActions } from "src/hooks/useActions";
import { useEffect, useState } from "react";
import Tabs, { ITab } from "../Tabs";

export const Articles = () => {
  const { getYourFeedArticles } = useActions();
  const {
    globalArticles,
    activeTag,
    sortedByTagArticles,
    yourFeedArticles,
  }: any = useTypedSelector((state) => state.articles);

  const { username }: any = useTypedSelector(
    ({ user }: any) => user.authProfile
  );

  useEffect(() => {
    const getData = async () => {
      await getYourFeedArticles();
    };
    getData();
  }, [username]);

  const tabs: ITab[] = localStorage.getItem("JWT")
    ? [
        { id: 1, label: "Your Feed" },
        { id: 2, label: "Global Feed" },
        { id: 3, label: `# ${activeTag}` },
      ]
    : [
        { id: 2, label: "Global Feed" },
        { id: 3, label: `# ${activeTag}` },
      ];
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);
  const handleClick = (id: number | string) => {
    setSelectedTabId(id);
  };

  return (
    <>
      {
        <div className="articles-content">
          <div className="feed-toggle">
            <Tabs
              selectedId={selectedTabId}
              tabs={tabs}
              onClick={handleClick}
            />
          </div>
          <div>
            {localStorage.getItem("JWT")
              ? selectedTabId === tabs[0].id && (
                  <div>
                    {yourFeedArticles.map((article: ArticleItem) => (
                      <Article key={article.title} article={article} />
                    ))}
                  </div>
                )
              : null}
            {selectedTabId ===
              (localStorage.getItem("JWT") ? tabs[1].id : tabs[0].id) && (
              <div>
                {globalArticles.map((article: ArticleItem) => (
                  <Article key={article.title} article={article} />
                ))}
              </div>
            )}
            {selectedTabId ===
              (localStorage.getItem("JWT") ? tabs[2].id : tabs[1].id) && (
              <div>
                {sortedByTagArticles.map((article: ArticleItem) => (
                  <Article key={article.title} article={article} />
                ))}
              </div>
            )}
          </div>
        </div>
      }
    </>
  );
};
