import React, { useState, useRef } from 'react'
import productsActions from '../redux/actions/productsActions'
import {connect} from 'react-redux'

function AddProducts(props){

  const [product,setProduct] = useState ({
      "name":'', 
      "images":'',
      "price":0, 
      "brand":'',
      "stock":0, 
      "category":'',
      "description":''
  })

  /* const name = useRef()
  const image = useRef()
  const price = useRef()
  const brand = useRef()
  const stock = useRef()
  const category = useRef()
  const description = useRef() */

  function productHandler(e) {

    /* setProduct({
      name: name.current.value,
      images: array,
      price: price.current.value,
      brand: brand.current.value,
      stock: stock.current.value,
      category: category.current.value,
      description: description.current.value,
    }) */
    /* console.log(array) */

        setProduct({...product,[e.target.id]:e.target.value})
        console.log(product)

    }

    const submitProduct = async (e) => {
    
        e.preventDefault()
        props.addProduct(product)
        
    }

    return(
      <>
      <div className="titleForm">
        <h1>ADD ITEMS</h1>
      </div>
      <div className="formulario">
        <form className="form" onSubmit={submitProduct}> 
            <label htmlFor="name">Product</label>
            <input type="text" placeholder="Name"required onChange={productHandler} /* ref={name} */ id="name" />
            <label htmlFor="image">Image</label>
            <input type="url" placeholder="Image" required onChange={productHandler} /* ref={image}  */id="images" />
            <label htmlFor="price">Price </label>
            <input type="price" placeholder="Price" required onChange={productHandler}  /* ref={price}  */id="price" />
            <label htmlFor="stock">Stock</label>
            <input type="stock" placeholder="Stock"required onChange={productHandler}  /* ref={stock} */ id="stock" />
            <label htmlFor="brand">Brand</label>
            <input type="brand" placeholder="Brand" required onChange={productHandler}  /* ref={brand}  */id="brand" />
            <label htmlFor="category" >Category</label>
            <input type="category" placeholder="Category"required onChange={productHandler} /* ref={category} */ id="category" />
            <label htmlFor="description" >Description</label>
            <input type="textarea" placeholder="Description"required onChange={productHandler} /* ref={description} */ id="description" />
            <button className="buttonForm" type="submit">Add product</button>
          </form>
        </div>
      </>
    )
}

const mapDispatchToProps = {    
  addProduct: productsActions.addProduct,
}

export default connect (null, mapDispatchToProps)(AddProducts)

