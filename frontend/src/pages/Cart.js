import React , { useEffect, useState } from 'react'
import IndividualCart from '../components/IndividualCart'
import productsActions from "../redux/actions/productsActions"
import { connect, useSelector } from 'react-redux'


function Cart(props){

    const [arrayCart,setArrayCart] = useState([])
    const totalStatePrice= useSelector(store=> store.productsReducer.totalPrice)

    useEffect(() => {
        allStorage()
    }, [])

    function allStorage() {
        var archive = [];
        var sumaProd = 0;
        var sumaPrice = 0;
    
        if(localStorage.length !== 0){
          for (var i = 0; i<localStorage.length; i++) {
            archive[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
            sumaProd = sumaProd + archive[i].qty 
            sumaPrice = sumaPrice + (archive[i].price * archive[i].qty) 
          }
    
          setArrayCart(archive)
          props.setArrayStorage(archive)
          props.setTotalProducts(sumaProd) 
          props.setTotalPrice(sumaPrice)
          
        }
      }    
         
    return (
            <div className="containerCart">
            {
                props.arraySt.length > 0 
                ? props.arraySt.map((elemento)=> {
                            
                            return (
                                <IndividualCart elemento={elemento} />
                            )

                        })               
                 
                :<h1>Charging cart...</h1>
            }     
            <div className="totales">
                        <h3>Total price = ${totalStatePrice.toFixed(2)}</h3>
                    </div>          
            </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        arraySt: state.productsReducer.arrayStorage
    } 
  }
  
  const mapDispatchToProps = {
        setArrayStorage: productsActions.setArrayStorage,
        setTotalPrice: productsActions.setTotalPrice,
        setTotalProducts: productsActions.setTotalProducts
  }
  
  export default connect (mapStateToProps, mapDispatchToProps)(Cart)


