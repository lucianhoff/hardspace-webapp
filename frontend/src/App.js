//components
import Footer from "./components/Footer";
import Navigation from "./components/navbar/Navbar";

//pages
import Home from './pages/Home';
import Products from "./pages/Products";
import Product from "./pages/Product";
import AddProducts from "./pages/AddProducts";
import Cart from './pages/Cart'

//style
import "./App.css";

//redux
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import usersActions from "./redux/actions/usersActions";
import {useEffect} from 'react'
import {connect} from 'react-redux'
import productsActions from "./redux/actions/productsActions";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Crud from "./pages/Crud";

function App(props) {


  function allStorage() {
    var archive = [];
    var sumaProd = 0;
    var sumaPrice = 0;

    if(localStorage.length !== 0){
      for (var i = 0; i<localStorage.length; i++) {
            if (localStorage.key(i)!=='token' && localStorage.key(i) !== "__paypal_storage__") {
                archive[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
                sumaProd = sumaProd + archive[i].qty 
                sumaPrice = sumaPrice + (archive[i].price * archive[i].qty) 
            } else {
                /* alert('este es el token') */
            }
      }
      console.log(archive)

      props.setArrayStorage(archive)
      props.setTotalProducts(sumaProd) 
      props.setTotalPrice(sumaPrice)
   
    }
  }
  
  useEffect(()=>{
    if(localStorage.getItem('token')){
      props.signInLS(localStorage.getItem('token'))
    }
    if (localStorage.length>0){
      allStorage()
    }
  },[])

  return (
    <BrowserRouter>
    <Navigation />
    {/* <PayPalScriptProvider options={{"client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}> */}
      <Routes>
        <Route path="/" element={<Home />} />
            {props.token ?
                <Route path='*'element ={<Home/>}></Route> : 
                <> <Route path = "/signUp" element = {<SignUp/>}></Route> <Route path = "/signIn" element = {<LogIn/>}></Route> </>}
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/addproducts" element={<AddProducts/>} />
        {true  ? <Route path="/crud" element={<Crud/>} /> : null}
              {/* props.admin */}
      </Routes>
      {/* </PayPalScriptProvider> */}
      <Footer/>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return{
      token: state.users.token,
      admin: state.users.admin
  }
}
const mapDispatchToProps = {
  signInLS: usersActions.signInLS,
  setTotalProducts: productsActions.setTotalProducts,
  setTotalPrice:productsActions.setTotalPrice,
  setArrayStorage: productsActions.setArrayStorage

}

export default connect(mapStateToProps, mapDispatchToProps)(App)