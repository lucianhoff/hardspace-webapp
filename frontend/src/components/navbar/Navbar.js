import "./navbar.css";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";

import {
  Link
} from "react-router-dom";

function Navigation() {
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

      <div className="container navigation">
        <div className="hardspace">
          <h1>HardSpace</h1>
        </div>
        <div className="input-catalog">
          <input
            type="text"
            placeholder="Search our catalog"
            className="inputcatalog"
          ></input>
          <div className="lens">🔍</div>
        </div>
        <div className="create-account">
          <div className="iconUser">
            <AiOutlineUser />
          </div>
          <div className="signClass">
            <h4>Sign in</h4>
            <h4>Create an account</h4>
          </div>
        </div>
        <div className="shop">
          <div className="iconUser">
            <AiOutlineShoppingCart />
          </div>
          <div className="signClass">
            <h4>My Cart</h4>
            <h4>$</h4>
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

export default Navigation;
