const initState = {
    productsList: [],
<<<<<<< HEAD
    totalProducts: 0,
    totalPrice: 0
=======
    searchProducts: []
>>>>>>> b5b0b9aa1a9044d848f4d76388255f51f935cdd4
}

const productsReducer = (state = initState,action)=>{
    switch(action.type){
        case 'GET_ALL_PRODUCTS':
        return{
            ...state,
            productsList: action.payload,
        }
<<<<<<< HEAD
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
=======

        case 'SEARCH': 
            return {
                ...state,
                searchProducts: action.payload
        }
        
>>>>>>> b5b0b9aa1a9044d848f4d76388255f51f935cdd4
        default:
            return state
    }
    
}

export default productsReducer