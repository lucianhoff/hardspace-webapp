import React , {useEffect, useState} from "react";
import { connect , useSelector, useDispatch} from "react-redux";
import "../App.css";
import productsActions from "../redux/actions/productsActions"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
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

  function allStorage() {
    var archive = [];
    var sumaProd = 0;
    var sumaPrice = 0;

    if(localStorage.length !== 0){
      for (var i = 0; i<localStorage.length; i++) {
        archive[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
        sumaProd = sumaProd + archive[i].qty 
        sumaPrice = sumaPrice + archive[i].price
      }
        console.log(archive)

        props.arrayStorage(archive)
        props.setTotalProducts(sumaProd) 
        props.setTotalPrice(sumaPrice)
  
   }
  }

  function addCart(elemento){
    const cantidad = {qty: 1}

    let productExists = localStorage.getItem(elemento._id)
    console.log(productExists)

    if(productExists !== null){
     
      let producto = JSON.parse(productExists)/*transformarmos un json a objeto*/
      producto.qty ++
      console.log(producto.qty)
      localStorage.setItem(producto._id,JSON.stringify(producto) )
      console.log("agregaste al carrito", producto)
      
      dispatch(productsActions.setTotalProducts(totalQty ++))
      dispatch(productsActions.setTotalPrice(totalPrice + producto.price))
      
    }else{
      
      const producto = Object.assign(elemento,cantidad)/*agrega el valor "cantidad" a cada producto*/
      localStorage.setItem(elemento._id, JSON.stringify(producto))
      console.log("agregaste al carrito", elemento.name)

      dispatch(productsActions.setTotalProducts(totalQty ++))
      dispatch(productsActions.setTotalPrice(totalPrice + producto.price))

      allStorage()
    }

     
    
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
                    <button className="buttonCarousel" onClick={()=> addCart(products)}>Buy</button>
                    
                </div>
            </div>
          </div>
          )
          : <h1>There are no products</h1>
        }
      </div>
    </>
   
  );
}

const mapStateToProps = (state) =>{
  return{
      productsList : state.productsReducer.productsList
  } 
}

const mapDispatchToProps = {
  getAllProducts: productsActions.getAllProducts,
  setTotalProducts: productsActions.setTotalProducts,
  setTotalPrice: productsActions.setTotalPrice,
  arrayStorage: productsActions.arrayStorage
}

export default connect (mapStateToProps, mapDispatchToProps)(Products)