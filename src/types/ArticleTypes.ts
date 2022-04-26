
export interface ArticleProps {
    author: {username: string, image: string},
    createdAt: string,
    favoritesCount: number,
    title: string,
    description: string,
    tagList: string[]
}