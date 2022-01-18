import React , {useEffect, useLayoutEffect, useState} from "react";
import { connect , useSelector, useDispatch} from "react-redux";
import "../App.css";
import productsActions from "../redux/actions/productsActions"
import Filter from "../components/Filter";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import swal from 'sweetalert2'
import "swiper/css/pagination"
import SwiperCore, {
  Pagination
} from 'swiper';
import { Link } from 'react-router-dom'
import Spinner from "../components/Spinner";
import "../CSS/swiper1.css"
SwiperCore.use([Pagination]);

const Products = (props) => {
  const id = "a"
  const dispatch = useDispatch()
  const totalQty = useSelector(store => store.productsReducer.totalProducts)
  // const arraySt = useSelector(store=> store.productsReducer.arrayStorage)
  const totalPrice = useSelector(store => store.productsReducer.totalPrice)
  const [dataProduct, setDataProduct] = useState(props.productsList);

  useEffect(() => {
    props.getAllProducts()
  }, [])

  useLayoutEffect(() => {
   (props.searchProducts.length > 0) ?
   setDataProduct(props.searchProducts) :
    setDataProduct(props.getAllProducts)

    console.log(dataProduct)
   
}, [props.searchProducts , props.getAllProducts ])

  

  function allStorage() {
    var archive = [];
    var sumaProd = 0;
    var sumaPrice = 0;

    if(localStorage.length !== 0){
      for (var i = 0; i<localStorage.length; i++) {
            if (localStorage.key(i)!=='token' && localStorage.key(i) !== "__paypal_storage__") {
                archive[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
                sumaProd = sumaProd + archive[i].qty 
                sumaPrice = sumaPrice + (archive[i].price * archive[i].qty) 
            } else {
                /* alert('este es el token') */
            }
      }
      console.log(archive)

      props.arrayStorage(archive)
      props.setTotalProducts(sumaProd)
      props.setTotalPrice(sumaPrice)

    }
  }


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

  function addCart(elemento) {
    const cantidad = { qty: 1 }

    let productExists = localStorage.getItem(elemento._id)
    console.log(productExists)

    /* if (props.token !== '') { */
    if (productExists !== null) {

      /* alert('producto existe') */
      let producto = JSON.parse(productExists)/*transformarmos un json a objeto*/
      producto.qty = producto.qty + 1

      localStorage.setItem(producto._id, JSON.stringify(producto))
      console.log("agregaste al carrito", producto)

      dispatch(productsActions.setTotalProducts(totalQty + 1))
      dispatch(productsActions.setTotalPrice(totalPrice + producto.price))

    } else {
      /* alert('producto NO existe') */
      const producto = Object.assign(elemento, cantidad)/*agrega el valor "cantidad" a cada producto*/
      localStorage.setItem(elemento._id, JSON.stringify(producto))
      console.log("agregaste al carrito", elemento.name)

      dispatch(productsActions.setTotalProducts(totalQty + 1))
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
  

  //   <Swiper pagination={true} className="mySwiper">
  // <SwiperSlide>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
  // </Swiper>
  return (
    <>
      {props.productsList.length > 0 ?
      <>
      <div className="filterProduct">
        <div className="filter">
          <Filter />
        </div>
        <div className="products">
          {
            props.productsList.length > 0
              ? props.productsList.map(products =>
                <div className="swiperFather">
                  <div className="swiperAtr">
                    <Swiper pagination={true} className="mySwiper">
                      {products.images.map(image => <SwiperSlide><img src={image} /></SwiperSlide>)}
                    </Swiper>
                    <h4 className="txtCarouselProduct">{products.name}</h4>
                    <div className=" price-button flex font-bold flex-col justify-evenly">
                      <div>
                        <p className="text-center">{`$${products.price}`}</p>
                      </div>
                      <div className="flex font-bold justify-evenly">
                        <button className="buttonCarousel" onClick={() => addCart(products)} >Buy</button>
                        <Link to={`/product/${products._id}`} className="buttonCarousel"  >View More</Link>
                      </div>

                    </div>
                  </div>
                </div>
              )
              : <Spinner />
          }
        </div>
      </div>
      </>
      : 
      <div className="flex justify-center align-center w-100 ">
            <Spinner />
      </div>
      }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    productsList: state.productsReducer.productsList,
    auxSearch: state.productsReducer.auxSearch,
    searchProducts : state.productsReducer.searchProducts
  }
}

const mapDispatchToProps = {
  getAllProducts: productsActions.getAllProducts,
  setTotalProducts: productsActions.setTotalProducts,
  setTotalPrice: productsActions.setTotalPrice,
  // arrayStorage: productsActions.arrayStorage,


}

export default connect(mapStateToProps, mapDispatchToProps)(Products)