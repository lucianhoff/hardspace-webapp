import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import productsActions from '../redux/actions/productsActions'

const Filter = (props) => {
    useEffect(() => {
       props.search()
    },[])
    console.log(props)
    const handleChange = (marca) => {
    let aux = props.searchProducts.filter(item => item.brand === marca)
    console.log(aux)
    props.brandsAux(aux)
}
return (
    <div>
            <ul className='textFilter'>Brands</ul>
            {
                props.searchProducts.length > 0
                ? props.searchProducts.map(brand =>
                    <div>                   
                    <input type='radio' name='brand' value={brand.brand} onChange={()=>handleChange(brand.brand)}/><li>
                    {brand.brand}
                    </li>
                    </div>
                ) : null
            }
            {console.log(handleChange)};


       
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        productsList: state.productsReducer.searchProducts,
        searchProducts: state.productsReducer.searchProducts,
        auxSearch: state.productsReducer.auxSearch
        
    }
}

const mapDispatchToProps =  {
    search: productsActions.search,
    brandsAux: productsActions.brandsAux
}
export default connect (mapStateToProps,mapDispatchToProps)(Filter)

