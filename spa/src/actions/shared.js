export const SET_LOADING = 'SET_LOADING'


export const showLoading = () => {
    return {
        type: SET_LOADING,
        payload: true
    }
}

export const hideLoading = () => {
    return {
        type: SET_LOADING,
        payload: false
    }
}