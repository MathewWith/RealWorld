import Articles from "src/components/Articles"
import PopularTags from "src/components/PopularTags"

export const Home = () => {
    return (
        <div className="home-page">
            <div className="home-page__banner">
                <div className="home-page__banner-content">
                    <h1 className="banner-content__label">conduit</h1>
                    <p className="banner-content__description">A place to share your knowledge</p>
                </div>
            </div>
            <div className="home-page__content">
                <div className="home-page__content-articles">
                    <Articles />
                </div>
                <div className="home-page__content-tags">
                    <PopularTags />
                </div>
            </div>
        </div>
    )
}