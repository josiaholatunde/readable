import axios from '../axiosConfig'
import { showLoading, hideLoading } from './shared'

export const ADD_POST_COMMENT = 'ADD_POST_COMMENT'

export const addPost = (post) => async dispatch => {
    try {
        dispatch(showLoading())
        setTimeout(async () => {
            const { data: createdPost } = await axios.post('/posts', post);
            
            dispatch(handleAddPost(createdPost))
            dispatch(hideLoading())
        }, 2000)
    } catch (err) {
        //notify error
        dispatch(hideLoading())
    }
}

export const handleAddPost = comment => {
    return {
        type: ADD_POST_COMMENT,
        comment
    }
}