const initialState = {
    searchProducts: []
}

const productReducer = (state = initialState,action) => {

    switch(action.type) {
        case 'SEARCH': 
            return {
                ...state,
                searchProducts: action.payload
            }
        default:
            return state
    }
}
export default productReducer