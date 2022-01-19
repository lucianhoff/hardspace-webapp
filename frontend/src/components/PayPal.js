import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"

const PayPal = (props) => {
  const { product } = props;
  const initialOptions = {
    "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
    currency: "USD",
    intent: "capture"}

  return <PayPalScriptProvider options={initialOptions}>
  <PayPalButtons
  style={{
    color:"silver"
  }}
  createOrder = {createOrder()}
  />
  </PayPalScriptProvider>
}; 

export default PayPal; 
