import axios from "axios"

const productsActions = {
    getAllProducts: ()=>{
        return async (dispatch) => {
            let response = await axios.get('http://localhost:4000/api/products')
            let data = response.data.response
            dispatch({type: 'GET_ALL_PRODUCTS', payload: data})
        }
    },
    setTotalProducts: (totalQuantity) => {
        return async (dispatch) => {
            dispatch({type: 'TOTAL_PRODUCTS', payload: totalQuantity})
        }
    },
    setTotalPrice: (totalPrice) => {
        return async (dispatch) => {
            dispatch({type: 'TOTAL_PRICE', payload: totalPrice})
        }
    }
}

export default productsActions