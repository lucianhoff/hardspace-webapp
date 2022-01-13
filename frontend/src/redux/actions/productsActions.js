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
                const arreglo = await axios.get('http://localhost:4000/api/products/'+text)

                if (arreglo.data.response.length > 0) {

                    /* console.log('dentro del IF del action:: este es arreglo:: ',arreglo) */
                    dispatch({type: "SEARCH", payload: arreglo.data.response})
                    return arreglo.data.response

                } else {
                    
                    /* console.log('No existen articulos para tu búsqueda.')
                    console.log('dentro del else del action:: este es arreglo:: ',arreglo) */
                    return arreglo.data.response

                }

            } catch(error) {
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

    brandsAux: (array) => {
        return async (dispatch) => {          
            dispatch({type: 'BRANDS', payload: array})
        }
    }
}

export default productsActions