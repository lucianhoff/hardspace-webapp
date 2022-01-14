import { process_params } from 'express/lib/router';
import React , {useState, useEffect }from 'react'
import {connect, useSelector, useDispatch} from 'react-redux'
import productsActions from '../redux/actions/productsActions'
import swal from 'sweetalert'



function IndividualCart({ elemento}){

    const dispatch = useDispatch()
    const totalProducts = useSelector(store => store.productsReducer.totalProducts)
    const totalPrice = useSelector(store => store.productsReducer.totalPrice)
    const array = useSelector(store=> store.productsReducer.arrayStorage)
  console.log(array)
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(elemento.qty)   

    }, [])
   
    const decrementCount = (value) => {    
        count > 0 && setCount(parseInt(count)-1)
        if(count > 0){
            let restaCant = totalProducts - 1
            let restaPrice = totalPrice - value
            elemento.qty--

            dispatch(productsActions.setTotalProducts(restaCant))
            dispatch(productsActions.setTotalPrice(restaPrice))
        }
     }

    const incrementCount = (value) => {
        setCount(parseInt(count)+1);
        let sumaCant = totalProducts + 1
        let sumaPrice = totalPrice + value
        elemento.qty++

        dispatch(productsActions.setTotalProducts(sumaCant))
        dispatch(productsActions.setTotalPrice(sumaPrice))
     }
    
    function deleteCart(){   
            
      alert(elemento._id)
      let productExists = localStorage.getItem(elemento._id)
      console.log(productExists)
   
      let restaCant = totalProducts - elemento.qty
      let restaPrice = totalPrice - (elemento.price*elemento.qty)
   
      const arrayAux = array.filter(item => item._id !== elemento._id);
      console.log(arrayAux)
      localStorage.removeItem(elemento._id)
      dispatch(productsActions.setTotalProducts(restaCant))
      dispatch(productsActions.setTotalPrice(restaPrice))
      dispatch(productsActions.arrayStorage(arrayAux))

   }
   
   function deleteArticle() {
       
    swal({
      title: "Are you sure?",
      text: "This article will be removed from the list",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteCart()
        swal("This product has been removed", {
          icon: "success",
        })
      } else {
        swal("Your product is safe")
      }
    })
  }

      
    

    return(
            <>
            <div className="articleContainer">
                            <img className="articleImg" src={elemento.images[0]}></img>
                            <div className="articleInfo">
                                <p className="articleTitle">{elemento.name}</p>
                                <p className='freedelivery'>Free delivery</p>
                                <div className="deleteAndBuy">
                                    <button className="delete" onClick={()=> deleteArticle()} >Delete article</button>
                                   
                                </div>
                                                   
                            </div>
                           <div className="articleInput">
                             <button  className="boton" onClick={()=>decrementCount(elemento.price)}>-</button>
                    
                                <input
                                id="inputCart"
                                type="text"
                                name="clicks"
                                value={count}
                                onChange={(event) => {setCount(event.target.value)}}
                                />
                                
                                
                                   
                             <button className="boton"  onClick={()=> incrementCount(elemento.price)}>+</button>
                            </div>
                           <div className="articlePrice">${(elemento.price * elemento.qty).toFixed(2)}</div>
                        </div>

</>
    )
}

const mapStateToProps = (state) =>{
    return{
     totalProducts: state.productsReducer.totalProducts,
     totalPrice: state.productsReducer.totalPrice
    } 
  }
  
  const mapDispatchToProps = {    
     setTotalProducts: productsActions.setTotalProducts,
     setTotalPrice: productsActions.setTotalPrice
  }
  
  export default connect (mapStateToProps, mapDispatchToProps)(IndividualCart)
