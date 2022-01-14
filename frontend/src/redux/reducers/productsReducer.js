const initState = {
    productsList: [],
    searchProducts: []
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
                searchProducts: action.payload
        }
        
        default:
            return state
    }
    
}

export default productsReducer