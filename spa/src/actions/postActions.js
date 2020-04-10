import axios from '../axiosConfig'
import { showLoading, hideLoading } from './shared'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'


export const fetchPosts = () => async dispatch => {
    try {
        dispatch(showLoading())
        setTimeout(async () => {
            const { data: posts } = await axios.get('/posts');
            const modifiedPosts = {}
            posts.forEach(post => {
                modifiedPosts[post.id] = post
            })
            dispatch(receivePosts(posts))
            dispatch(hideLoading())
        }, 2000)
    } catch (err) {
        dispatch(hideLoading())
    }
}

const receivePosts = posts => {
    return {
        type: RECEIVE_POSTS,
        posts
    }
}