import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"

const PayPal = (props) => {




  const { product } = props;
  console.log(product);
  const initialOptions = {
    "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID, currency: "USD",
    intent: "capture"
  }


  const createOrder = (data, actions) => {
    //Creo la orden de con los datos, esta puede ser general o con detalle de items
    console.log(data)
    return actions.order.create({
      purchase_units: [
        {
          description: "items",
          amount: {
            // total
            value: 100,
          },

        },


      ],
    });
  };


  return <PayPalScriptProvider options={initialOptions}>
    <PayPalButtons
      style={{
        color: "silver"
      }}
      createOrder={createOrder}
    />
  </PayPalScriptProvider>
};

export default PayPal; 
