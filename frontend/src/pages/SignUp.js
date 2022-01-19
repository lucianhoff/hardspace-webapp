import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import toasty from "../components/Toast";
import usersActions from '../redux/actions/usersActions'
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import GoogleLogin from "react-google-login";
import * as React from "react";
import { BsGoogle } from "react-icons/bs";
import { FaRegFolderOpen } from "react-icons/fa";
import { connect } from 'react-redux'
import { app } from '../services/Firebase'
import { v4 as uuidv4 } from "uuid";

const SignUp = (props) => {
  const [file, setFile] = useState("");
  const [Image, setImage] = useState(null);
  const firstName = useRef()
  const lastName = useRef()
  const email = useRef()
  const password = useRef()
  const [hidden, setHidden] = useState(true);


  const archivoHandler = async (e) => {
    const image = e.target.files[0];
    setImage(image);
    const storageRef = app.storage().ref();
    const archivoPath = storageRef.child(`${uuidv4()}-${image.name}`);
    await archivoPath.put(image);
    const enlaceUrl = await archivoPath.getDownloadURL();
    setFile(enlaceUrl)
  }
  

  const responseGoogle = async (res) => {
    let googleUser = {
      firstName: res.profileObj.givenName,
      lastName: res.profileObj.familyName,
      email: res.profileObj.email,
      password: res.profileObj.googleId,
      image: res.profileObj.imageUrl,
      google: true,
    };
    try {
      let response = await props.signUpUser(googleUser);
      if (response.data.success) {
        toasty("success", "Welcome!");
      } else {
        toasty("error", "You created your account with google, please log in");
      }
    } catch (error) {
      props.history.push("/fail");
      return false;
    }
  }

  function userHandler(e) {
    e.preventDefault()

    props.signUpUser({
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      password: password.current.value,
      image: file

    }
    )

    // firstName.current.value = ""
    // lastName.current.value = ""
    // email.current.value = ""
    // password.current.value = ""

  }



  return (
    <div>
      <div className="signUpBack" style={{ backgroundImage: "" }}>
        {/* url('/assets/signup.jpg') */}
        <div className="signUpTittle">
          <h2>Hello!</h2>
          <h4>Create your account here.</h4>
        </div>
        <div className="formContainer">
          <form onSubmit={userHandler}>
            <span>
              <input
                type="text"
                name="firstName"
                placeholder="First name"

                ref={firstName}
                autoComplete="nope"
              />
            </span>
            <span>
              <input
                type="text"
                name="lastName"
                placeholder="Last name"

                ref={lastName}
                autoComplete="nope"
              />
            </span>
            <span>
              <input
                type="email"
                name="email"
                placeholder="Email"

                ref={email}
                autoComplete="nope"
              />
            </span>
            <span>
              <input
                type={hidden ? "password" : "text"}
                name="password"
                placeholder="Password"

                ref={password}
                autoComplete="nope"
              />
              <div onClick={() => setHidden(!hidden)} className="eyeIcon">
                {hidden ? (
                  <BsEyeSlash className="inputIcons" />
                ) : (
                  <BsEye className="inputIcons" />
                )}
              </div>
            </span>
            <span>
              <label>

                <input
                  class="hidden cursor-pointer"
                  type="file"
                  onChange={archivoHandler}
                  id="icon-button-file"
                  style={{ display: "none" }}

                />

                <div className="flex">
                  <div className="flex items-center align-center">
                    <FaRegFolderOpen className="mr-3" />
                  </div>

                  {Image ? Image.name : "Upload your image"}
                </div>
              </label>
            </span>

            <div className="formButtons">
              <button type="submit" >Create account</button>
              <GoogleLogin
                clientId="1092488784737-mqogab3geo4opt8lr2gs0rnptb72iq28.apps.googleusercontent.com"
                render={(renderProps) => (
                  <>
                    <button
                      className="botonGoogle"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Sign up with Google
                      <div className="inputIcons">
                        <BsGoogle />
                      </div>
                    </button>
                  </>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
              <p>
                Already have an account? <Link to="/signIn">Log in here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </div>
  );
};



const mapDispatchToProps = {
  signUpUser: usersActions.signUpUser
}

export default connect(null, mapDispatchToProps)(SignUp)
