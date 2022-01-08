import "./navbar.css";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { connect } from 'react-redux'
import usersActions from '../../redux/actions/usersActions'
import { Link} from "react-router-dom";

function Navigation(props) {

  console.log(props.token)
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
          ></input>
          <div className="lens">🔍</div>
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
            <Link onClick={() => { props.signOutUser() }} to="/signin">Sign Out</Link>
           

           }
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



const mapStateToProps = (state) => { 
  return {   
    token: state.users.token,
    firstName: state.users.firstName,
    image: state.users.image,
    
  }
}

const mapDispatchToProps = {
  signInUser: usersActions.signInUser,
  signInLS: usersActions.signInLS,
  signOutUser: usersActions.signOutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)

