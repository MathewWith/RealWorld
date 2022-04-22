import { sortArticlesByTags } from "src/helpers/sortArticlesByTags";

const initialState = [
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

interface TagsAction {
    type: string;
    payload: any
}

export const tags = (state = initialState, action: TagsAction) => {
    switch(action.type){
        case 'SORT_ARTICLES_BY_TAG':
            return [...sortArticlesByTags(state, action.payload)];
            
        default:
            return state
    }
}