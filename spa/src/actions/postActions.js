import axios from '../axiosConfig'
import { showLoading, hideLoading } from './shared'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const RECEIVE_POST_COMMENTS = 'RECEIVE_POST_COMMENTS'


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

export const fetchPost = (id) => async dispatch => {
    try {
        dispatch(showLoading())
        setTimeout(async () => {
            const postUrl = axios.get(`/posts/${id}`);
            const postCommentsUrl = axios.get(`/posts/${id}/comments`);
            const result = await Promise.all([postUrl, postCommentsUrl])
            const post  = result[0].data;
            const comments  = result[1].data;

            dispatch(receivePost(post))
            dispatch(receivePostComments(comments))
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

const receivePost = post => {
    return {
        type: RECEIVE_POST,
        post
    }
}

const receivePostComments = (comments) => {
    return {
        type: RECEIVE_POST_COMMENTS,
        comments
    }
}