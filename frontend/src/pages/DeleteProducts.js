import React , {useEffect, useState} from "react";
import { connect , useSelector, useDispatch} from "react-redux";
import "../App.css";
import productsActions from "../redux/actions/productsActions"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import swal from 'sweetalert'
import "swiper/css/pagination"
import SwiperCore, {
  Pagination
} from 'swiper';

SwiperCore.use([Pagination]);

const Products = (props) => {
  
  const dispatch = useDispatch()
  const [load,setLoad] = useState(false)

  useEffect(() => {
    props.getAllProducts()
  }, [])


  function deleteArticle(elemento) {
    swal({
      title: "Are you sure?",
      text: "This article will be removed from database.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        props.delProduct(elemento._id)
        setLoad(!load)
        
        swal("This product has been removed.", {
          icon: "success",
        })
        props.getAllProducts()
      } else {
        swal("Your product is safe.")
      }
    })
  }

  return (
  //   <Swiper pagination={true} className="mySwiper">
  // <SwiperSlide>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
  // </Swiper>
    <>
      <div className="delete-products">
        {
          props.productsList.length > 0 
          ? props.productsList.map( item =>
            <div className="delete-prod">
                <img src={item.images[0]}/>
                <div>
                  <h4>{item.name}</h4>
                </div>
                <div className="price-button">
                    <p>{`$${item.price}`}</p>
                    <button className="button-delete" onClick={()=> deleteArticle(item)} >Delete</button> 
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
  delProduct: productsActions.delProduct,
}

export default connect (mapStateToProps, mapDispatchToProps)(Products)