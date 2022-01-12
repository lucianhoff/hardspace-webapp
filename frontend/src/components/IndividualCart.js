import { process_params } from 'express/lib/router';
import React , {useState, useEffect }from 'react'
import {connect} from 'react-redux'
import productsActions from '../redux/actions/productsActions'


function IndividualCart( props, [{elemento}]){

   
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(elemento.qty)
    }, [])

   
    const decrementCount = () => {
    
        count > 0 && setCount(parseInt(count)-1)
     }

    const incrementCount = () => {
        props.setTotalProducts(props.totalProducts+1) 
        // props.setTotalPrice(sumaPrice)
        setCount(parseInt(count)+1);
        }

    

    return(
            <>
            <div className="articleContainer">
                            <img className="articleImg" src={elemento.images[0]}></img>
                            <div className="articleInfo">
                                <p className="articleTitle">{elemento.name}</p>
                                <p>Free delivery</p>
                                <div className="deleteAndBuy">
                                    <button className="delete">Delete</button>
                                    <button className="buynow">Buy now</button>
                                </div>
                                                   
                            </div>
                           <div className="articleInput">
                             <button  className="boton" onClick={decrementCount}>-</button>
                    
                                <input
                                id="inputCart"
                                type="text"
                                name="clicks"
                                value={count}
                                onChange={(event) => {setCount(event.target.value)}}
                                />
                                
                                
                                   
                             <button className="boton"  onClick={incrementCount}>+</button>
                            </div>
                           <div className="articlePrice">${elemento.price}</div>
                        </div>

</>
    )
}

const mapStateToProps = (state) =>{
    return{
        totalProducts: state.productsReducer.totalProducts,
        // totalPrice: state.productsReducer.totalPrice
    } 
  }
  
  const mapDispatchToProps = {    
    setTotalProducts: productsActions.setTotalProducts,
    // setTotalPrice: productsActions.setTotalPrice
  }
  
  export default connect (mapStateToProps, mapDispatchToProps)(IndividualCart)

// export default IndividualCart