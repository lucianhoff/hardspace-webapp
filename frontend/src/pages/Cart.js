import React , {useEffect, useState} from 'react'
import IndividualCart from '../components/IndividualCart'
import productsActions from "../redux/actions/productsActions"
import {connect,useSelector} from 'react-redux'

function Cart(props){
    
    
    const totalQty = useSelector(store => store.productsReducer.totalProducts)
    console.log(totalQty)

   const [array, setArray] = useState([])
   const [totalProd, setTotalProd] = useState()
   const [totalPrice, setTotalPrice] = useState()

    useEffect(() => {
        props.getAllProducts()
       allStorage()

    }, []) 

   function allStorage() {
        var archive = [];
        var sumaProd = 0;
        var sumaPrice = 0;

        for (var i = 0; i<localStorage.length; i++) {
            archive[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
            sumaProd = sumaProd + archive[i].qty 
            sumaPrice = sumaPrice + archive[i].price
 
        console.log(archive)
        setArray(archive)
        setTotalProd(sumaProd)
        setTotalPrice(sumaPrice)
        }
    }
    
       
    console.log(array)          
         
    return(
        <>
            <div className="containerCart">
                <div className="primerdiv">
                    <h3 className="carrito">Cart</h3>
                    <h3 className="guardados">Saved Items</h3>
                </div>
                <div>
                    
                    {array.map((elemento,index)=> {
                        return (
                            <IndividualCart elemento={elemento} />
                        )

                    })}                
                
            
                </div>
                <div>
                    <h3>Total price = ${totalPrice}</h3>
                    <h3>Total Product = {totalProd}</h3>
                </div>
                
            </div>
    
    </>

    )
}

const mapStateToProps = (state) =>{
    return{
        productsList : state.productsReducer.productsList,
        totalProducts: state.productsReducer.totalProducts
    } 
  }
  
  const mapDispatchToProps = {
    getAllProducts: productsActions.getAllProducts,
    setTotalProducts: productsActions.setTotalProducts,
    setTotalPrice: productsActions.setTotalPrice
  }
  
  export default connect (mapStateToProps, mapDispatchToProps)(Cart)


