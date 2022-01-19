import React from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { connect } from "react-redux";

const PayPal = (props) => {
  const initialOptions = {"client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID, currency: "USD",
  intent: "capture"}
  console.log(props.totalPrice)
  const createOrder = (data, actions) => {
    //Creo la orden de con los datos, esta puede ser general o con detalle de items
    return actions.order.create({
          purchase_units: [
    {
       description:"items",
       amount: {
         value: props.totalPrice,
       },
 
     },
  
    
   ],

 });
};
  return <PayPalScriptProvider options={initialOptions}>
  <PayPalButtons
  style={{
    color:"silver"
  }}
  createOrder={createOrder}/>
  </PayPalScriptProvider>
}; 

const mapStateToProps = (state) =>{
  return{
    totalPrice: state.productsReducer.totalPrice
  } 
}

export default connect (mapStateToProps)(PayPal)