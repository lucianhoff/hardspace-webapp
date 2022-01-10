import React from "react";
import "../App.css"

export const Products = () => {
  return (
    
    <div>
    <div className="products">
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
    </div>
    </div>
  );
};
