const initState = {
    productsList: [],
    searchProducts: [],
    auxSearch: [],
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
        
        default:
            return state
    }
}

export default productsReducer