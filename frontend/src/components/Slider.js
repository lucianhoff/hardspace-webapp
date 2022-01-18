import React, {useEffect } from "react";
import Slider from "react-slick";
import "../App.css";
import productsActions from "../redux/actions/productsActions"
import {connect} from 'react-redux'



const Carousel = (props) => {

  useEffect(() => {
    props.getAllProducts()
      
}, [])

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 6,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          slidesPerRow: 1,
         
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          slidesPerRow: 1,
         
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          slidesPerRow: 1,
          
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          slidesPerRow: 1,
          
          dots: false,
          arrows: false
        }
      }
   
    ]
  }

  
  return (
    <div>
 
        <Slider {...settings}>
          {props.productsList.map((product, index) => {
            return(
              <div key={index} className="cardCarousel">
              <img className="imgCarousel" style={{backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}} src={product.images[0]} />
              <h4 className="txtCarousel text-center py-5">{(product.name).substr(0,32)}</h4>
              <div className="price-button">
                <p>${product.price}</p>
                <button className="buttonCarousel">Add</button>
              </div>
            </div>
            )
          }
            
            )}
        
        
        </Slider>
    </div>
  );
};



const mapStateToProps = (state) =>{
  return{
      productsList : state.productsReducer.productsList,
      // auxSearch : state.productsReducer.auxSearch,
      // searchProducts: state.productsReducer.searchProducts
  } 
}

const mapDispatchToProps = {
  getAllProducts: productsActions.getAllProducts


  
}

export default connect (mapStateToProps, mapDispatchToProps)(Carousel)