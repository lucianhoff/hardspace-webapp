//components
import Footer from "./components/Footer";
import Navigation from "./components/navbar/Navbar";
import Products from "./pages/Products";

//pages
import Home from './pages/Home';
import Cart from './pages/Cart'
import AddProducts from "./pages/AddProducts";

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

function App(props) {


  function allStorage() {
    var archive = [];
    var sumaProd = 0;
    var sumaPrice = 0;

    if(localStorage.length !== 0){
      for (var i = 0; i<localStorage.length; i++) {
        archive[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
        sumaProd = sumaProd + archive[i].qty 
        sumaPrice = sumaPrice + (archive[i].price * archive[i].qty) 
      }
      console.log(archive)

      props.arrayStorage(archive)
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
      <Routes>
        <Route path="/" element={<Home />} />
               {props.token ?
                <Route path='*'element ={<Home/>}></Route> : 
                <> <Route path = "/signUp" element = {<SignUp/>}></Route> <Route path = "/signIn" element = {<LogIn/>}></Route> </>}
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/addproducts" element={<AddProducts/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return{
      token: state.users.token
  }
}
const mapDispatchToProps = {
  signInLS: usersActions.signInLS,
  setTotalProducts: productsActions.setTotalProducts,
  setTotalPrice:productsActions.setTotalPrice,
  arrayStorage: productsActions.arrayStorage

}

export default connect(mapStateToProps, mapDispatchToProps)(App)