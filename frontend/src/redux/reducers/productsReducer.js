const initState = {
    productsList: [],
}

const productsReducer = (state = initState,action)=>{
    switch(action.type){
        case 'GET_ALL_PRODUCTS':
        return{
            ...state,
            productsList: action.payload,
        }
        default:
            return state
    }
}

export default productsReducer