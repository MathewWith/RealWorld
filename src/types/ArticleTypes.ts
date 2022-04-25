
export interface ArticleProps {
    img: string,
    author: {username: string},
    createdAt: string,
    favoritesCount: number,
    title: string,
    description: string,
    tagList: string[]
}