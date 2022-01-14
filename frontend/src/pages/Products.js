import React , {useEffect, useState} from "react";
import { connect , useSelector, useDispatch} from "react-redux";
import "../App.css";
import productsActions from "../redux/actions/productsActions"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import swal from 'sweetalert2'
import "swiper/css/pagination"
import SwiperCore, {
  Pagination
} from 'swiper';

SwiperCore.use([Pagination]);

const Products = (props) => {
  
  const dispatch = useDispatch()
  const totalQty = useSelector(store => store.productsReducer.totalProducts)
  // const arraySt = useSelector(store=> store.productsReducer.arrayStorage)
  const totalPrice= useSelector(store=> store.productsReducer.totalPrice)

  useEffect(() => {
    props.getAllProducts()
  }, [])

  /* const [array, setArray] = useState([])
  const [totalProd, setTotalProd] = useState() */
  /* const [totalPrice, setTotalPrice] = useState() */
  const Toast = swal.mixin({
    toast: true,
    position: 'top-end',
    background: '#16bbdc',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', swal.stopTimer)
      toast.addEventListener('mouseleave', swal.resumeTimer)
    }
  })

  function addCart(elemento){
    const cantidad = {qty: 1}

    let productExists = localStorage.getItem(elemento._id)
    console.log(productExists)

    /* if (props.token !== '') { */
      if(productExists !== null){
       
        alert('producto existe')
        let producto = JSON.parse(productExists)/*transformarmos un json a objeto*/
        producto.qty = producto.qty +1
        
        localStorage.setItem(producto._id,JSON.stringify(producto) )
        console.log("agregaste al carrito", producto)
        
        dispatch(productsActions.setTotalProducts(totalQty +1))
        dispatch(productsActions.setTotalPrice(totalPrice + producto.price))
        
      }else{
        alert('producto NO existe')
        const producto = Object.assign(elemento,cantidad)/*agrega el valor "cantidad" a cada producto*/
        localStorage.setItem(elemento._id, JSON.stringify(producto))
        console.log("agregaste al carrito", elemento.name)
  
        dispatch(productsActions.setTotalProducts(totalQty +1))
        dispatch(productsActions.setTotalPrice(totalPrice + producto.price))
      }

    /* } else {
      return Toast.fire({
        title:'HardSpace',
        text:`You must be logged to add articles.`,
        icon:'warning',
      })
    } */
  }

  return (
  //   <Swiper pagination={true} className="mySwiper">
  // <SwiperSlide>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
  // </Swiper>
    <>
      <div className="products">
        {
          props.productsList.length > 0 
          ? props.productsList.map( products =>
            <div className="swiperFather">
              <div className="swiperAtr">
                <Swiper pagination={true} className="mySwiper">
                {products.images.map(image=><SwiperSlide><img src={image}/></SwiperSlide>)}
                </Swiper>
                  <h4 className="txtCarouselProduct">{products.name}</h4>
                  <div className="price-button">
                    <p>{`$${products.price}`}</p>
                    <button className="buttonCarousel" onClick={()=> addCart(products)} >Buy</button>
                    
                </div>
            </div>
          </div>
          )
          : <h1>There are no products</h1>
        }
      </div>
    </>
  )
}

const mapStateToProps = (state) =>{
  return{
      productsList : state.productsReducer.productsList,
      /* token: state.usersReducer.token */
  } 
}

const mapDispatchToProps = {
  getAllProducts: productsActions.getAllProducts,
  setTotalProducts: productsActions.setTotalProducts,
  setTotalPrice: productsActions.setTotalPrice
}

export default connect (mapStateToProps, mapDispatchToProps)(Products)