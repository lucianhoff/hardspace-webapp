import React , {useState }from 'react'



function IndividualCart({elemento}){

    const [count, setCount] = useState(0);

   
    const decrementCount = () => {
        count > 0 && setCount(parseInt(count)-1)
     }

    const incrementCount = () => {
           setCount(parseInt(count)+1);
        }


    return(
            <>
            <div className="articleContainer">
                            <div className="articleImg"> imagen</div>
                            <div className="articleInfo">
                                <p className="articleTitle">{elemento.nombre}</p>
                                <p>Free delivery</p>
                                <div className="deleteAndBuy">
                                    <button className="delete">Delete</button>
                                    <button className="buynow">Buy now</button>
                                </div>
                                                   
                            </div>
                           <div className="articleInput">
                             <button  className="boton" onClick={decrementCount}>-</button>
                    
                                <input
                                id="inputCart"
                                type="text"
                                name="clicks"
                                value={count}
                                onChange={(event) => {setCount(event.target.value)}}
                                />
                                
                                
                                   
                             <button className="boton"  onClick={incrementCount}>+</button>
                            </div>
                           <div className="articlePrice">$</div>
                        </div>

</>
    )
}

export default IndividualCart