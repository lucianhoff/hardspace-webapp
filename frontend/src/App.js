//components
import Footer from "./components/Footer";
import Navigation from "./components/navbar/Navbar";

//pages
import Home from './pages/Home';
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

function App(props) {
  useEffect(()=>{
    if(localStorage.getItem('token')){
        props.signInLS(localStorage.getItem('token'))
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
  signInLS: usersActions.signInLS
}

export default connect(mapStateToProps, mapDispatchToProps)(App)