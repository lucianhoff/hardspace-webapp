const initState = {
    productsList: [],
    searchProducts: [],
    auxSearch: [],
    totalProducts: 0,
    totalPrice: 0
}

const productsReducer = (state = initState,action)=>{
    switch(action.type){
        case 'GET_ALL_PRODUCTS':
        return{
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
        
        case 'TOTAL_PRODUCTS' :
        return {
            ...state,
            totalProducts: action.payload,
        }
        case 'TOTAL_PRICE' :
        return {
            ...state,
            totalPrice: action.payload,
        }
        default:
            return state
    }
    
}

export default productsReducer