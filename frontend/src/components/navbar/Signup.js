import {Link} from 'react-router-dom';


import React, {useRef} from 'react'


import GoogleLogin from 'react-google-login'
// import {useNavigate} from "react-router-dom"

function Signup(props){
//   let navigate = useNavigate()

//   localStorage.getItem("token") && !props.token && props.signInToken()
//   props.token && navigate("/", {replace: true})

  const responseGoogle = (response) => {
    let googleUser = {
    
      name: response.profileObj.givenName,
      lastName: response.profileObj.familyName,
      email: response.profileObj.email,
      password: response.profileObj.googleId,        
      google:true,
    }
    props.signupUser(googleUser)
   
  }

  const socialtitle = useRef()
  const email = useRef()
  const password = useRef()
  const name = useRef()
  const lastName = useRef()


  function handleSignUp(e) {
    e.preventDefault()

    props.signupUser({
      socialtitle: socialtitle.current.value,
      name: name.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      password: password.current.value,      
     
    }
    )
    socialtitle.current.value = ""
    name.current.value = ""
    lastName.current.value = ""
    email.current.value = ""
    password.current.value = ""
   
  
  }
   
    return(
        <>
        <div className="contenedorsignup">
        <div className="formulario">
        <form className="form" onSubmit={handleSignUp}>  
        <legend>Sign Up
        <h5>It's quick and easy</h5>  </legend>     
            <label htmlFor="socialtitle" >Social title</label>
           <p><input type="radio" value="Mr" />Mr.  </p> 
           <p><input type="radio" value="Mrs" />Mrs.  </p> 
            <label htmlFor="name" >First Name</label>
            <input type="text" placeholder="Name"ref={name} required minLength="3" maxLength="20" id="name" />
            <label htmlFor="lastname" >Last Name</label>
            <input type="text" placeholder="Last name"ref={lastName} required minLength="3" maxLength="20" id="lastname" />
            <label htmlFor="email"  >Email </label>
            <input type="email" placeholder="E-mail"ref={email} required minLength="3" id="email" />
            <label htmlFor="pass" >Password</label>
            <input type="password" placeholder="Password"ref={password}  required id="pass" />
           <p>Bitrhday: <input type="date" /> </p>
    
            <input className="botones p-1 fs-small btn-form" type="submit" value="Sign Up" />
            <p >or</p>
            <div className="googlelogin">
              <GoogleLogin
              clientId="976419191370-0f3qd6gishicdla3a3sn99f76pht65v2.apps.googleusercontent.com"
              buttonText="Sign up with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              />

              </div>
            
            
        <div className="already">
              <p>Already have an account? </p>
              <Link to='#'><span className="Create"> Sign in here!</span></Link>            
            </div>
            
        </form>
        </div>
        </div>
       
      </>
      
    )
}


export default Signup