import "./navbar.css";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import productsActions from "../../redux/actions/productsActions"
import { connect, useSelector, useDispatch } from "react-redux"
import swal from 'sweetalert2'
import usersActions from '../../redux/actions/usersActions'
import { Link, useNavigate } from "react-router-dom";




function Navigation(props) {


  let navigate = useNavigate();

  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const usuario = useSelector(store => store.productsReducer.totalProducts)


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

    console.log('el search es::', search)
    if (search.length > 0 && search.length < 3) {
      Toast.fire({
        title: 'HardSpace',
        text: `You must enter at least 3 characters`,
        icon: 'warning',
      })
    } else {
      console.log('VOY A LA BUSQUEDA')
      const busqueda = await props.search(search)
      if (busqueda.length > 0) {
        console.log('DENTRO DEL NAVBAR:: la busqueda es::', busqueda)
        console.log('DENTRO DEL NAVBAR:: searchProducts es::', props.searchProducts)


        Toast.fire({
          title: 'HardSpace',
          text: `There are ${busqueda.length} articles.`,
          icon: 'success',
        })

      } else {
        Toast.fire({
          title: 'HardSpace',
          text: `Don't exist articles for your search.`,
          icon: 'warning',
        })
      }

    }
    navigate("/products")
  }
  console.log(props)



  function handlePress(e) {
    if (e.key === "Enter") {
      handleSubmit()
    }


  }
  console.log(props.admin)
  console.log(props.firstName)
  console.log(props)
  return (
    <>
      <div className="firstNav">
        <div>
          <div>
            <Link to="/signin" className="firstP"> My Account</Link>
          </div>
        </div>
        {props.admin ? (
          <>
            <div>
              <div>
                <Link to="/addproducts" className="firstP"> Add Products</Link>
              </div>
            </div>
            <div>
              <div>
                <Link to="/deleteproducts" className="firstP">Delete Products</Link>
              </div>
            </div>
          </>
        )
          : null}
        <div>
          <div>
            <Link to="/" className="firstP"> Contact us</Link>
          </div>
        </div>
      </div>

      <div className="navigation">
        <div className="logName">
          <Link to="/">
          <img src="./assets/hardSpace.png" className="imgLogo" alt="logo" />
          </Link>
          <div className="hardspace">
            <Link to="/"><h1>HardSpace</h1></Link>
          </div>
        </div>
        <div className="input-catalog">

          <input
            type="text"
            placeholder="Search our catalog"
            className="inputcatalog"
            onChange={inputHandler}
            onKeyPress={handlePress}
            id="search"
            name="search">
          </input>


          <div /* type="button" */ onClick={handleSubmit} className="lens">🔍</div>

        </div>
        <div className="iconsRight">
          <div className="create-account">
            <div className="iconUser">
              {!props.token ? <AiOutlineUser /> :
                <img className="imgUserNav" src={props.image} />}

            </div>


            <div className="signClass">
              {!props.token ? (
                <>
                  <Link to="/signIn">Sign in</Link>
                  <Link to="/signUp">Sign up</Link>
                </>) :
                <>
                  <p>Welcome {props.firstName} {props.admin ? " (A) " : null}</p>
                  <Link onClick={() => { props.signOutUser() }} to="/signin">Sign Out</Link>
                </>


              }
            </div>

          </div>
          <div className="shop">
            <div className="iconUser">
              {!props.token ?
                (
                  <>
                    <Link to="/signIn"><AiOutlineShoppingCart /></Link>
                    <div className="signintoadd">
                      <Link to="/signIn">Sign in to add</Link>
                    </div>
                  </>) :
                (<>
                  <Link to="/cart"><AiOutlineShoppingCart /></Link>
                  <div className="signCart">
                    <div className="badge">{props.totalProducts}</div>
                    <h5 className="signintoadd">${props.totalPrice.toFixed(2)}</h5>
                  </div>
                </>)}
            </div>

          </div>
        </div>

      </div>
      <div className="secondNav">
        <div>
          <div>
            <span className="secondSpan"><Link to="/products" className="effect-underline">SHOP</Link></span>
          </div>
        </div>
        <div>
          <div>
            <span className="secondSpan"><Link to="/products" className="effect-underline">ELECTRONIC</Link></span>
          </div>
        </div>
        <div>
          <div>
          </div>

          <span className="secondSpan"><Link to="/products" className="effect-underline">BRANDS</Link></span>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.users.token,
    firstName: state.users.firstName,
    image: state.users.image,
    searchProducts: state.productsReducer.searchProducts,
    totalProducts: state.productsReducer.totalProducts,
    totalPrice: state.productsReducer.totalPrice,
    admin: state.users.admin
  }
}

const mapDispatchToProps = {
  signInUser: usersActions.signInUser,
  signInLS: usersActions.signInLS,
  signOutUser: usersActions.signOutUser,
  search: productsActions.search
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
