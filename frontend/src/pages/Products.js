import React , {useEffect} from "react";
import { connect } from "react-redux";
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
  useEffect(() => {
    props.getAllProducts()
}, [])

  return (
    <>
      <div className="products">
        {
          props.productsList.length > 0 
          ? props.productsList.map( products =>
            <div className="swiperFather">
              <div className="swiperAtr">
                <Swiper pagination={true} className="mySwiper">
                {products.images.map(image=><SwiperSlide><img src={image} alt={products.name}/></SwiperSlide>)}
                </Swiper>
                  <h4 className="txtCarouselProduct">{products.name}</h4>
                  <div className="price-button">
                    <p>{`$${products.price}`}</p>
                    <button className="buttonCarousel">Buy</button>
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
      productsList : state.productsReducer.productsList,
  } 
}

const mapDispatchToProps = {
  getAllProducts: productsActions.getAllProducts
}

export default connect (mapStateToProps, mapDispatchToProps)(Products)