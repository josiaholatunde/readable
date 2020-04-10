import { RECEIVE_POSTS, RECEIVE_POST, RECEIVE_POST_COMMENTS, ADD_POST } from "../actions/postActions";

const initialState = {
    posts: {},
    post: {}
}
export default function (state=initialState, action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            return {
                ...state,
                posts: {...action.posts}
            }
        case RECEIVE_POST:
            return {
                ...state,
                post: action.post
        }
        case RECEIVE_POST_COMMENTS: 
        return {
            ...state,
            post: {
                ...state.post,
                comments: action.comments
            }
        }
        case ADD_POST:
            return {
                ...state
            }
        default:
            return state
    }
}