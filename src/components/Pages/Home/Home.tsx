import Articles from "src/components/Articles";
import Tags from "src/components/Tags";

export const Home = () => {
  return (
    <div className="main-page">
      {localStorage.getItem("JWT") ? <br /> : 
        <div className="banner">
        <div className="banner__content">
          <h1 className="banner__content--label">conduit</h1>
          <p className="banner__content--description">
            A place to share your knowledge
          </p>
        </div>
      </div>
      }
      <div className="main-page__box">
        <div className="main-page__box-articles">
          <Articles />
        </div>
        <div className="main-page__box-tags">
          <Tags />
        </div>
      </div>
    </div>
  );
};
