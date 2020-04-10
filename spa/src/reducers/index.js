import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import loadingReducer from './loadingReducer'

export default combineReducers({
    categories: categoryReducer,
    loading: loadingReducer
})