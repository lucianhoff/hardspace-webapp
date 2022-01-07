import "./navbar.css";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";


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
          <span ><a href="#" className="effect-underline">SHOP</a></span>
          </div>
        </div>
        <div>
          <div>
          <span ><a href="#" className="effect-underline">ELECTRONIC</a></span>
          </div>
        </div>
        <div>
          <div>
          <span ><a href="#" className="effect-underline">SALE</a></span>
          </div>
        </div>
        <div>
          <div>
            
          <span ><a href="#" className="effect-underline">BRANDS</a></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
