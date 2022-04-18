import { Link } from 'react-router-dom'
import './Article.scss'
import {AiFillHeart} from 'react-icons/ai'
import {ArticleProps} from 'src/types/ArticleTypes'

export const Article = ({article}: {article: ArticleProps}) => {
    return (
        <div className="article">
            <div className="article__content--top">
                <div className="content--top__user">
                    
                    <img src="https://api.realworld.io/images/demo-avatar.png" alt={article.img} style={{borderRadius:'35px'}}/>
                    <div className='content--top__user--wrap'>
                        <Link to={''} className='link'>
                            {article.userName}
                        </Link>
                        <p>{article.date}</p>
                    </div>
                </div>
                <div className="content--top__likes">
                    <AiFillHeart />
                    {article.likes}
                </div>
            </div>
            <div className="article__content--middle">
                <h2 style={{marginBottom: '0'}}>{article.title}</h2>
                <p style={{marginTop: '0'}}>{article.description}</p>
            </div>
            <div className="article__content--bottom">
                <button>Read more...</button>
                <div>{article.tags}</div>
            </div>
        </div>
    )
}