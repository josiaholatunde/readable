import axios from '../axiosConfig'
import { showLoading, hideLoading } from './shared'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'


export const fetchCategories = () => async dispatch => {
    try {
        dispatch(showLoading())
        setTimeout(async () => {
            const { data: { categories } } = await axios.get('/categories');
            const modifiedCategories = {}
            categories.forEach(category => {
                modifiedCategories[category.name] = category
            })
            dispatch(receiveCategories(modifiedCategories))
            dispatch(hideLoading())
        }, 2000)
    } catch (err) {
        dispatch(hideLoading())
    }
}

const receiveCategories = categories => {
    return {
        type: RECEIVE_CATEGORIES,
        categories
    }
}