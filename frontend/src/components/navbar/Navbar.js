import "./navbar.css";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { connect } from "react-redux"
import productActions from "../../actions/productActions"
import swal from 'sweetalert2'

import {
  Link
} from "react-router-dom";

function Navigation(props) {

  const [search,setSearch] = useState ('')

  const Toast = swal.mixin({
    toast: true,
    position: 'top-end',
    background: '#16bbdc',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', swal.stopTimer)
      toast.addEventListener('mouseleave', swal.resumeTimer)
    }
  })

  const inputHandler = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }

  const handleSubmit = async (e) => {

    console.log('el search es::',search)
    if (search.length < 3) {
        return Toast.fire({
            title:'HardSpace',
            text:`You must enter at least 3 characters`,
            icon:'warning',
        })
    } else {
        console.log('VOY A LA BUSQUEDA')
        const busqueda = await props.search(search) 
        
        if ( busqueda.length > 0 ) {
          console.log('DENTRO DEL NAVBAR:: la busqueda es::',busqueda)
          return Toast.fire({
            title:'HardSpace',
            text:`There are ${busqueda.length} articles.`,
            icon:'success',
          })

        } else {
          return Toast.fire({
            title:'HardSpace',
            text:`Don´t exist articles for your search.`,
            icon:'warning',
          })
        }
    }
  }

  return (
    <>
      <div className="firstNav">
        <div>
          <div>
            <p>My Account</p>
          </div>
        </div>
        <div>
          <div>
            <p>About us</p>
          </div>
        </div>
        <div>
          <div>
            <p>Contact us</p>
          </div>
        </div>
      </div>

      <div className="navigation">
        <div className="logName">
        <img src="./assets/hardSpace.png" className="imgLogo" alt="logo"/>
        <div className="hardspace">
          <h1>HardSpace</h1>
        </div>
        </div>
        <div className="input-catalog">
          <input
            type="text"
            placeholder="Search our catalog"
            className="inputcatalog"
            onChange={inputHandler}
            id="search"
            name="search">
          </input>
          <div /* type="button" */ onClick={handleSubmit} className="lens">🔍</div>
        </div>
        <div className="iconsRight">
        <div className="create-account">
          <div className="iconUser">
            <AiOutlineUser />
          </div>
          
          <div className="signClass">
            <h5>Sign in</h5>
            <h5>Sing up</h5>
          </div>
        </div>
        <div className="shop">
          <div className="iconUser">
            <AiOutlineShoppingCart />
          </div>
          <div className="signClass">
            <h5>My Cart</h5>
            <h5>$</h5>
          </div>
        </div>
        </div>
        
      </div>
      <div className="secondNav">
        <div>
          <div>
          <span ><Link to="/" className="effect-underline">SHOP</Link></span>
          </div>
        </div>
        <div>
          <div>
          <span ><p className="effect-underline">ELECTRONIC</p></span>
          </div>
        </div>
        <div>
          <div>
          </div>
            
          <span ><p className="effect-underline">BRANDS</p></span>
        </div>
      </div>
    </>
  );
}
/* export default Navigation; */

const mapStateToProps = (state) => {
  return {
    /* searchProducts: state.productReducer.searchProducts */
  }
}

const mapDispatchToProps = {
  search: productActions.search
}

export default connect (mapStateToProps, mapDispatchToProps)(Navigation);
