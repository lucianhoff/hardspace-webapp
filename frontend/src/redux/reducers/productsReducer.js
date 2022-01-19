const initState = {
    productsList: [],
    searchProducts: [],
    totalProducts: 0,
    totalPrice: 0,
    arrayStorage: [],
    auxSearch: [],
    product: false
}

const productsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_ALL_PRODUCTS':
            return {
                ...state,
                productsList: action.payload,
            }
        case 'SEARCH':
            return {
                ...state,
                searchProducts: action.payload,
                auxSearch: action.payload
            }
        case 'BRANDS':
            return {
                ...state,
                auxSearch: action.payload
            }
        case 'TOTAL_PRODUCTS':
            return {
                ...state,
                totalProducts: action.payload,
            }
        case 'TOTAL_PRICE':
            return {
                ...state,
                totalPrice: action.payload,
            }
        case 'STORAGE':
            return {
                ...state,
                arrayStorage: action.payload,
            }
        case "GET_ONE_PRODUCT":
            return {
                ...state,
                product: action.payload
            }
        case "DELETE_PRODUCT":
            return {
                ...state,
                productsList: action.payload
            }
        default:
            return state
    }

}

export default productsReducer