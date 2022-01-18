import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import productsActions from "../redux/actions/productsActions";

const Filter = (props) => {
  const [stateArray, setStateArray] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    props.search();
    arrayBrands();
  }, [load, props.searchProducts]);

  const arrayBrands = () => {
    let aux2 = [];  
    if (props.searchProducts.length > 0) {
      for (let index = 0; index < props.searchProducts.length; index++) {
        if (!aux2.includes(props.searchProducts[index].brand)) {
          aux2.push(props.searchProducts[index].brand);
        }
      }
    } else {
      for (let index = 0; index < props.dataProduct.length; index++) {
        if (!aux2.includes(props.dataProduct[index].brand)) {
          aux2.push(props.dataProduct[index].brand);
        }
      }
    }
    setStateArray(aux2);
    // alert(aux2.length)
  };

  
  const handleChange = (marca) => {
    console.log(marca);
    console.log(props.searchProducts);
    let aux;

    if (props.searchProducts.length > 0){
      aux = props.searchProducts.filter((item) => item.brand.toLowerCase() === marca.toLowerCase());
      console.log(aux);
    }else{
      aux = props.dataProduct.filter((item) => item.brand.toLowerCase() === marca.toLowerCase());
      console.log(aux);
    }
    
    setLoad(!load);
    props.brandsAux(aux);
  };

  

  return (
    <div>
      <ul>
        <li>
          <h3>Brands</h3>
          
        </li>
        {stateArray.length > 0
          ? stateArray.map((brand, index) => (
            <div >
              <li className="filterContainer">
                <div>
                <p>{brand}</p>
                </div>
                <div>

                <input
                  type="radio"
                  name="brand"
                  value={brand}
                  onChange={() => handleChange(brand)}
                />
                </div>
              </li>
            </div>
            ))
          : null}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productsList: state.productsReducer.searchProducts,
    searchProducts: state.productsReducer.searchProducts,
    auxSearch: state.productsReducer.auxSearch,
  };
};

const mapDispatchToProps = {
  search: productsActions.search,
  brandsAux: productsActions.brandsAux,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
