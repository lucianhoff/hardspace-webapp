import axios from "axios" 

const productActions = {

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
                console.error(error)
            }
        }
    }
}

export default productActions