import React , {useEffect, useState} from 'react'
import IndividualCart from '../components/IndividualCart'
import productsActions from "../redux/actions/productsActions"
import {connect,useSelector} from 'react-redux'


function Cart(props){
    
    const totalQty = useSelector(store => store.productsReducer.totalProducts)
    const totalStatePrice= useSelector(store=> store.productsReducer.totalPrice)
    const arraySt = useSelector(store=> store.productsReducer.arrayStorage)
    console.log(totalQty)

    const [array, setArray] = useState([])
    /* const [totalProd, setTotalProd] = useState()
    const [totalPrice, setTotalPrice] = useState() */

    useEffect(() => {
       render()
    }, []) 


    function render(){       
        setArray(arraySt)
    }
          
    console.log(arraySt)          
         
    return (
            <div className="containerCart">
                <div className="primerdiv">
                    <h3 className="carrito">Cart</h3>
                    <h3 className="guardados">Saved Items</h3>
                </div>
                <div>
                    
                    {arraySt.map((elemento,index)=> {
                        
                        return (
                            <IndividualCart elemento={elemento} />
                        )

                    })}                
            
                </div>
                <div className="totales">
                    <h3>Total price = ${totalStatePrice.toFixed(2)}</h3>
                </div>
            </div>
    )
}
export default Cart

/* const mapStateToProps = (state) =>{
    return{
        productsList : state.productsReducer.productsList,
        totalProducts: state.productsReducer.totalProducts
    } 
  }
  
  const mapDispatchToProps = {
    getAllProducts: productsActions.getAllProducts,
  }
  
  export default connect (mapStateToProps, mapDispatchToProps)(Cart) */


