import './navbar.css'

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
          <div>icono user</div>
          <div>
            <div>sign in</div>
            <div>create an account</div>
          </div>
        </div>
        <div className="shop">
          <div>carrito icono</div>
          <div >
            <div>my cart</div>
            <div>$</div>
          </div>
        </div>
      </div>
      </>
   
  );
}

export default Navigation