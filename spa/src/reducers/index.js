import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import loadingReducer from './loadingReducer'
import postReducer from './postReducer'

export default combineReducers({
    categories: categoryReducer,
    posts: postReducer,
    loading: loadingReducer
})