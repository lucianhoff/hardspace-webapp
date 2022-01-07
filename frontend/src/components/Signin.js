import {useRef} from 'react'
import {Link} from 'react-router-dom';
// import { connect } from "react-redux";
// import authAction from '../redux/actions/authAction';
import GoogleLogin from 'react-google-login'
// import {useNavigate} from "react-router-dom"

function Signin(props){
//   let navigate = useNavigate()
  const responseGoogle = (response) => {
    props.signIn(
      response.profileObj.email,
      response.profileObj.googleId,
      true
    )
  }
//   localStorage.getItem("token") && !props.token && props.signInToken()
  
  const email = useRef()
  const password = useRef()
  
  function handleSignIn(e) {
    e.preventDefault()
   
    // props.signIn(email.current.value, password.current.value)

    email.current.value = ""
    password.current.value = ""
      
  }
  
    // props.token && navigate("/", {replace: true})

 
    return(
        <>
        <div className="contenedorsignin">
        <div className="formulario">        
        <form className="form" onSubmit={handleSignIn}>  
        <legend>Log in yo your Account</legend>         
            <label htmlFor="email" >Email </label>
            <input type="email" placeholder="E-mail" ref={email}id="email" />
            <label htmlFor="pass" >Password</label>
            <input type="password" ref={password} placeholder="Password"className=""  id="pass" />
            <input className="botones p-1 fs-small btn-form txt-center" type="submit" value="Log in"/>
            <p >or</p>
            <div className="googlelogin">
              <GoogleLogin
              clientId="976419191370-0f3qd6gishicdla3a3sn99f76pht65v2.apps.googleusercontent.com"
              buttonText="Sign in with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              />

              </div>
              <div className="already">
            
              <Link to='/signup'><span className="Create"> Don't you have an account yet? Create new account</span></Link>            
            </div>
        </form>
        </div>
       
        </div>
       
      </>
      
    )
}

export default Signin