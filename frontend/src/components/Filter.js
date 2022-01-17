import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import productsActions from "../redux/actions/productsActions";

const Filter = (props) => {
  const [stateArray, setStateArray] = useState([]);
 

  useEffect(() => {
    props.search();
    arrayBrands();
  }, [stateArray]);

  const arrayBrands = () => {
    let aux2 = [];
    for (let index = 0; index < props.searchProducts.length; index++) {
      if (!aux2.includes(props.searchProducts[index].brand)) {
        aux2.push(props.searchProducts[index].brand);
      }
    }
    setStateArray(aux2);
    // alert(aux2.length)
  };

  console.log(props.searchProducts.brand);

  console.log(props);

  const handleChange = (marca) => {
    let aux = props.searchProducts.filter((item) => item.brand === marca);
    console.log(aux);

    props.brandsAux(aux);
  };
  //
  return (
    <div>
      <ul>
        <li><h3>Brands</h3></li>
      {stateArray.length > 0
        ? stateArray.map((brand, index) => (
            <li>
              <input
                type="radio"
                name="brand"
                value={brand}
                onChange={() => handleChange(brand)}
              />

              <p>{brand[index]}</p>
            </li>
          ))
        : null}
      {console.log(handleChange)}
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
