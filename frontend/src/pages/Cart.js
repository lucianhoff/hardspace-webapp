import React from 'react'

import IndividualCart from '../components/IndividualCart'

function Cart(){
    
        
    const array = [
                    {"nombre": "articulo1",
                    "id" : 0,
                "count": 4},
                {"nombre": "articulo2",
                "id" : 1,
                "count": 2},
                {"nombre": "articulo3",
                "id" : 2,
                "count": 5}
                
                ]
       
              
         
    return(
        <>
            <div className="containerCart">
                <div className="primerdiv">
                    <h3 className="carrito">Cart</h3>
                    <h3 className="guardados">Saved Items</h3>
                </div>
                <div>
                    {array.map((elemento,index)=> {
                        return (
                            <IndividualCart elemento={elemento} />
                        )

                    })}                
                
            
                </div>
                
            </div>
    
    </>

    )
}

export default Cart