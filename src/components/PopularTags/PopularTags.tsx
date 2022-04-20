import Tag from "src/components/Tag"

const tags = ['welcome','implementations','codebaseShow']

export const PopularTags = () => {
    return (
        <div className="tags">
            <p className="tags__title">Popular Tags</p>
            <div className="tags__content">
                {tags.map((item: string) => <Tag tag={item}/>)}
            </div>
        </div>
    )
}