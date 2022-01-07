import React from "react";
import Slider from "react-slick";
import "../App.css";
{
  /* <div className="cardCarousel">
          <div className="imgCarousel">imagen</div>
          <h4 className="txtCarousel">Texto</h4>
          <div className="price-button">
            <p>$28.99</p>
            <button className="buttonCarousel">Buy</button>
          </div>
        </div> */
}

const Carousel = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 7,

    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div>
      <h2>Swipe To Slide</h2>
        <Slider {...settings}>
          <div className="cardCarousel">
            <div className="imgCarousel">imagen</div>
            <h4 className="txtCarousel">Texto</h4>
            <div className="price-button">
              <p>$28.99</p>
              <button className="buttonCarousel">Buy</button>
            </div>
          </div>
          <div className="cardCarousel">
            <div className="imgCarousel">imagen</div>
            <h4 className="txtCarousel">Texto</h4>
            <div className="price-button">
              <p>$28.99</p>
              <button className="buttonCarousel">Buy</button>
            </div>
          </div>
          <div className="cardCarousel">
            <div className="imgCarousel">imagen</div>
            <h4 className="txtCarousel">Texto</h4>
            <div className="price-button">
              <p>$28.99</p>
              <button className="buttonCarousel">Buy</button>
            </div>
          </div>
          <div className="cardCarousel">
            <div className="imgCarousel">imagen</div>
            <h4 className="txtCarousel">Texto</h4>
            <div className="price-button">
              <p>$28.99</p>
              <button className="buttonCarousel">Buy</button>
            </div>
          </div>
          <div className="cardCarousel">
            <div className="imgCarousel">imagen</div>
            <h4 className="txtCarousel">Texto</h4>
            <div className="price-button">
              <p>$28.99</p>
              <button className="buttonCarousel">Buy</button>
            </div>
          </div>
          <div className="cardCarousel">
            <div className="imgCarousel">imagen</div>
            <h4 className="txtCarousel">Texto</h4>
            <div className="price-button">
              <p>$28.99</p>
              <button className="buttonCarousel">Buy</button>
            </div>
          </div>
          <div className="cardCarousel">
            <div className="imgCarousel">imagen</div>
            <h4 className="txtCarousel">Texto</h4>
            <div className="price-button">
              <p>$28.99</p>
              <button className="buttonCarousel">Buy</button>
            </div>
          </div>
          <div className="cardCarousel">
            <div className="imgCarousel">imagen</div>
            <h4 className="txtCarousel">Texto</h4>
            <div className="price-button">
              <p>$28.99</p>
              <button className="buttonCarousel">Buy</button>
            </div>
          </div>
          <div className="cardCarousel">
            <div className="imgCarousel">imagen</div>
            <h4 className="txtCarousel">Texto</h4>
            <div className="price-button">
              <p>$28.99</p>
              <button className="buttonCarousel">Buy</button>
            </div>
          </div>
        </Slider>
    </div>
  );
};

export default Carousel;
