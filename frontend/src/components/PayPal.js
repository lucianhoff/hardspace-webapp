import React, {useEffect, useState} from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { connect } from "react-redux";

const PayPal = (props) => {

  const [price, setPrice] = useState(props.totalPrice);
  const [success, setSuccess] = useState(false);
  const [orderID, setOrderID] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setPrice(props.totalPrice);
    PayPalCheckOut()
  }, [props.arrayStorage]);
  const initialOptions = {"client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID, currency: "USD",
  intent: "capture"}
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

const onApprove = (data, actions) => { //recibo el resultado de mi operacion
  
return actions.order.capture()
.then(function (details) {
    const { payer } = details;
    setSuccess(true);
            var transaction = details.purchase_units[0].payments.captures[0];
            alert('Transaction '+ transaction.status + ': ' + transaction.id + '\n\nSee console for all available details');
    
    setOrderID(transaction.id)
});  
};
const onCancel = (data) => {
console.log('You have cancelled the payment!', data);
}            

const onError = (data, actions) => { //Capturo error en caso de que exista
setErrorMessage("An Error occured with your payment ");
};

const PayPalCheckOut = ()=>{
return (
    <PayPalScriptProvider options={initialOptions}> {/*Inicializo el CDN*/}

            {/*Inicializo los botones*/}
            <PayPalButtons 
                createOrder={createOrder}
                onApprove={ onApprove}
                onError={onError}
                onCancel={onCancel}
            />
    </PayPalScriptProvider>
)
}
return (
<PayPalCheckOut/> 
);
}

const mapStateToProps = (state) =>{
  return{
    totalPrice: state.productsReducer.totalPrice,
    arrayStorage: state.productsReducer.arrayStorage
  } 
}

export default connect (mapStateToProps)(PayPal)