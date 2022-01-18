import axios from "axios"
import {toast} from 'react-toastify';

const productsActions = {
    getAllProducts: ()=>{
        return async (dispatch) => {
            let response = await axios.get('http://localhost:4000/api/products')
            let data = response.data.response
            dispatch({type: 'GET_ALL_PRODUCTS', payload: data})
        }
    },
    search : (text) => {
        return async (dispatch, getState) => {
            try {
                let arreglo
                if(text === "" ){
                    arreglo = await axios.get('http://localhost:4000/api/products')
                }else{
                    arreglo = await axios.get('http://localhost:4000/api/products/'+text)
                }
               

                if (arreglo.data.response.length > 0) {

                    
                    dispatch({type: "SEARCH", payload: arreglo.data.response})
                    return arreglo.data.response

                } else {
                    
                    return arreglo.data.response

                }

            } catch(error) {
                console.error(error)
            }
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
    },
    addProduct: (newProduct) => {
        return async (dispatch, getState) =>{
            try {
                const product = await axios.post('http://localhost:4000/api/products',  {
                    ...newProduct})
                    
                    console.log(product)
                if(product.data.success && !product.data.error){
                    toast.success("Your product has been uploaded", {
                        position: toast.POSITION.TOP_CENTER,
                    
                    }) 
                            
                }else{
                    toast.error(product.data.response)
                }
            }catch(error){
                console.error(error)
            }
        }
    },
    setArrayStorage: (array) => {
        return async (dispatch) => {
            dispatch({type: 'STORAGE', payload: array})
        }
    },
    brandsAux: (array) => {
        return async (dispatch) => {          
            dispatch({type: 'BRANDS', payload: array})
        }
    },
    getOneProduct: (id) => {
        console.log(id)
        return async (dispatch) => {
            let response = await axios.get('http://localhost:4000/api/product/'+id)
            let data = response.data.response
            dispatch({type: 'GET_ONE_PRODUCT', payload: data})
        }
    },
    deleteProduct: (id) => {
        return async (dispatch) => {
            let response = await axios.delete('http://localhost:4000/api/product/'+id)
            let data = response.data.response
            dispatch({type: 'DELETE_PRODUCT', payload: data})
        }
    },
    delProduct:(id)=>{
        return async (dispatch) => {
            const response = await axios.delete(`http://localhost:4000/api/product/${id}`)
            return ({ response: response.data.response, success: true })
        }
    },
}

export default productsActions