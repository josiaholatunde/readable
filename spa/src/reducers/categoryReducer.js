import { RECEIVE_CATEGORIES, RECEIVE_CATEGORY_POSTS } from "../actions/category";

const initialState = {
    categories: {},
    category: {}
}
export default function (state=initialState, action) {
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            return {
                ...state,
                categories: {
                    ...action.categories
                }
            }
        case RECEIVE_CATEGORY_POSTS:
            return {
                ...state,
                category: {
                  posts:  action.posts
                }
            }
        default:
            return state
    }
}