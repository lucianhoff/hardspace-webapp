import React , {useEffect, useState} from "react";
import { connect } from "react-redux";
import "../App.css";
import productsActions from "../redux/actions/productsActions"
import Filter from "../components/Filter";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, {
  Pagination
} from 'swiper';

SwiperCore.use([Pagination]);

const Products = (props) => {
  
  useEffect(() => {
    props.getAllProducts()
  }, [])

  function addCart(elemento) {
    const cantidad = { qty: 1 }
const [array, setArray] = useState([])
const [totalProd, setTotalProd] = useState()
const [totalPrice, setTotalPrice] = useState()


  function addCart(elemento){
    const cantidad = {qty: 1}

    let productExists = localStorage.getItem(elemento._id)
    console.log(productExists)

    if (productExists !== null) {
      let producto = JSON.parse(productExists)/*transformarmos un json a objeto*/
      producto.qty = producto.qty + 1
      localStorage.setItem(producto._id, JSON.stringify(producto))
      console.log("agregaste al carrito", producto)

    } else {
      const producto = Object.assign(elemento, cantidad)/*agrega el valor "cantidad" a cada producto*/
      localStorage.setItem(elemento._id, JSON.stringify(producto))
      console.log("agregaste al carrito", elemento.name)
    }
  }


    
    allStorage()
  }
  
  function allStorage() {
    var archive = [];
    var sumaProd = 0;
    var sumaPrice = 0;

    for (var i = 0; i<localStorage.length; i++) {
        archive[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
        sumaProd = sumaProd + archive[i].qty 
        sumaPrice = sumaPrice + archive[i].price

    console.log(archive)
    props.setTotalProducts(sumaProd) 
    props.setTotalPrice(sumaPrice)
   
    }
}
  

  allStorage()

  return (
    <>
      <div className="filterProduct">
        <div className="filter">
          <Filter />
        </div>
        <div className="products">
          {
            props.auxSearch.length > 0
              ? props.auxSearch.map(products =>
                <div className="swiperFather">
                  <div className="swiperAtr">
                    <Swiper pagination={true} className="mySwiper">
                      {products.images.map(image => <SwiperSlide><img src={image} alt={products.name} /></SwiperSlide>)}
                    </Swiper>
                    <h4 className="txtCarouselProduct">{products.name}</h4>
                    <div className="price-button">
                      <p>{`$${products.price}`}</p>
                      <button className="buttonCarousel" onClick={() => addCart(products)} >Buy</button>

                    </div>
                  </div>
                </div>
              )
              : <h1>There are no products</h1>
          }
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) =>{
  return{
      productsList : state.productsReducer.productsList,
      auxSearch: state.productsReducer.auxSearch,
  } 
}

const mapDispatchToProps = {
  getAllProducts: productsActions.getAllProducts,
  setTotalProducts: productsActions.setTotalProducts,
  setTotalPrice: productsActions.setTotalPrice
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)