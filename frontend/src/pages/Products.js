import React , {useEffect} from "react";
import { connect } from "react-redux";
import "../App.css";
import productsActions from "../redux/actions/productsActions"
import Slider from "react-slick";

const Products = (props) => {
  useEffect(() => {
    props.getAllProducts()
}, [])
const settings = {
  className: "center",
  infinite: true,
  centerPadding: "50px",
  slidesToShow: 1,

  swipeToSlide: true,
  afterChange: function (index) {
  },
};

  return (
    <>
      <div className="products">
        {
          props.productsList.length > 0 
          ? props.productsList.map( products =>
            <div className="productContent">
              <div className="cardCarousel">
                {/* <Slider {...settings}>{products.images.map(image=><img src={image}/>)}</Slider> */}
                  <h4 className="txtCarousel">{products.name}</h4>
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
    // <div>
    // <div className="products">
      // <div className="cardCarousel">
      //   <div className="imgCarousel">imagen</div>
      //   <h4 className="txtCarousel">Texto</h4>
      //   <div className="price-button">
      //     <p>$28.99</p>
      //     <button className="buttonCarousel">Buy</button>
      //   </div>
      // </div>
    //   <div className="cardCarousel">
    //     <div className="imgCarousel">imagen</div>
    //     <h4 className="txtCarousel">Texto</h4>
    //     <div className="price-button">
    //       <p>$28.99</p>
    //       <button className="buttonCarousel">Buy</button>
    //     </div>
    //   </div>
    //   <div className="cardCarousel">
    //     <div className="imgCarousel">imagen</div>
    //     <h4 className="txtCarousel">Texto</h4>
    //     <div className="price-button">
    //       <p>$28.99</p>
    //       <button className="buttonCarousel">Buy</button>
    //     </div>
    //   </div>
    // </div>
    // </div>
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