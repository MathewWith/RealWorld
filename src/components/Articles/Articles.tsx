import { Article } from "../Article/Article"
import {ArticleProps} from "src/types/ArticleTypes"


const data = [
    {
        img: '.',
        userName: 'Igor',
        date: 'November 24, 2021',
        likes: 1952,
        title: 'Create a new implementation',
        description: 'join the community by creating a new implementation',
        tags: ['implementations']
    },
    {
        img: '.',
        userName: 'Pasha',
        date: 'November 24, 2021',
        likes: 1193,
        title: 'Explore implementations',
        description: 'discover the implementations created by the RealWorld community',
        tags: ['codebaseShow']
    },
    {
        img: '.',
        userName: 'Tosha',
        date: 'November 24, 2021',
        likes: 817,
        title: 'Welcome to RealWorld project',
        description: 'Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more',
        tags: ['welcome']
    },
]


export const Articles = () => {
    return (
        <div className="articles--content">
            {data.map((article: ArticleProps) => <Article article={article}/>)}
        </div>
    )
}