import React, {useRef} from 'react'


function AddProducts(){

    const name = useRef()
  const image = useRef()
  const price = useRef()
  const stock = useRef()
  const brand = useRef()
  const category = useRef()
  const description = useRef()

  function handleAddProduct(e) {
    e.preventDefault()

   ({
      name: name.current.value,
      image: image.current.value,
      price: price.current.value,
     stock: stock.current.value,      
      brand: brand.current.value,
      category: category.current.value,
      description: description.current.value
    }
    )
    
        name.current.value=""
        image.current.value=""
        price.current.value=""
        stock.current.value=""      
        brand.current.value=""
        category.current.valuee=""
        description.current.value=""
  
  }
    return(
      <>
      <div className="titleForm">
        <h1>ADD ITEMS</h1>
      </div>
      <div className="formulario">
        <form className="form" onSubmit={handleAddProduct}>  
            <label htmlFor="name">Product</label>
            <input type="text" placeholder="Name"ref={name} id="name" />
            <label htmlFor="image">Image</label>
            <input type="url" placeholder="Image"ref={image}  id="image" />
            <label htmlFor="price">Price </label>
            <input type="price" placeholder="Price"ref={price}  id="price" />
            <label htmlFor="stock">Stock</label>
            <input type="stock" placeholder="Stock"ref={stock} id="stock" />
            <label htmlFor="brand">Brand</label>
            <input type="brand" placeholder="Brand"ref={brand} id="brand" />
            <label htmlFor="category" >Category</label>
            <input type="category" placeholder="Category"ref={category} id="category" />
            <label htmlFor="description" >Description</label>
            <input type="textarea" placeholder="Description"ref={description} id="description" />
            <button className="buttonForm"type="reset">Add product</button>
          </form>
        </div>
      </>
    )
}

export default AddProducts