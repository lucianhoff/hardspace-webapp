import { useState } from "react"
import {Link} from "react-router-dom"
import toasty from "../components/Toast"
import { connect } from 'react-redux'
import usersActions from '../redux/actions/usersActions'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify';
import GoogleLogin from 'react-google-login'
import * as React from 'react';

const SignUp = (props) => {
    const [newUser, setNewUser] = useState({ firstName: '', lastName: '', email: '', password: '', image: '' })// , birthday:''
    const [hidden, setHidden] = useState(true)

    const userHandler = (e) =>{
        const value= e.target.value
        const data= e.target.name
        setNewUser({...newUser, [data]: value})
    }

    const sendFormHandler = async () => {
        if (Object.values(newUser).some(value => value === "")) {
            toasty('error', 'All fields are required!')
            } else {
                try{
                    let response = await props.signUpUser(newUser)
                    console.log(response)
                    if(response.data.success){
                        toasty('success', 'Welcome adventurer!')
                    }else if (response.data.errors){ 
                        let errors= response.data.errors
                        errors.map(error => toast.warn(error.message, {
                            position: "bottom-right",
                            autoClose: 4000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            }))
                        }
                        else{
                            toasty('error', 'This email is already in use')
                          }
                }
                catch(error){
                    props.history.push('/fail')
                    return false
                }   
        }      
    }

    const responseGoogle = async (res) => {
        let googleUser = {
            firstName: res.profileObj.givenName,
            lastName: res.profileObj.familyName,
            email: res.profileObj.email,
            password: res.profileObj.googleId,
            image: res.profileObj.imageUrl,
            google:true 
        }
        try{
            let response = await props.signUpUser(googleUser)
            if(response.data.success){
                toasty('success', 'Welcome!')
            } else {
                toasty('error', 'You created your account with google, please log in')
            }
        }catch (error){
            props.history.push('/fail')
            return false
        }
    }
    

    return(
        <div>
            <div className="signUpBack" style={{backgroundImage:""}}>{/* url('/assets/signup.jpg') */}
                <div className="signUpTittle">
                    <h2>Hello!</h2>
                    <h4>Create your account here.</h4>
                </div>
                <div className="formContainer">
                    <form>
                        <span><input type="text" name="firstName" placeholder="First name" value={newUser.firstName} onChange={userHandler} autoComplete="nope"/></span>
                        <span><input type="text" name="lastName" placeholder="Last name" value={newUser.lastName} onChange={userHandler} autoComplete="nope"/></span>
                        <span><input type="email" name="email" placeholder="Email" value={newUser.email} onChange={userHandler} autoComplete="nope"/></span>
                        <span><input type={hidden ? "password" : "text"} name="password" placeholder="Password" value={newUser.password} onChange={userHandler} autoComplete="nope"/>
                                 <div onClick={() => setHidden(!hidden)} className="eyeIcon">
                                    {hidden ? <BsEyeSlash className="inputIcons" /> : <BsEye className="inputIcons" />}
                                </div> 
                                </span>
                        <span><input type="url" name="image" placeholder="Url profile picture" value={newUser.image} onChange={userHandler} autoComplete="nope"/></span>
                        {/* <span><input type="date" name="date" value={newUser.birthday} onChange={userHandler}/></span> */}
                    </form>
                    <div className="formButtons">
                        <button onClick={sendFormHandler}>Create account</button>
                        <GoogleLogin
                                    clientId="1092488784737-mqogab3geo4opt8lr2gs0rnptb72iq28.apps.googleusercontent.com"
                                    render={renderProps => (
                                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign up with Google</button>
                                    )}
                                    buttonText="Login"
                                    onSuccess={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                                                        />
                        <p>Already have an account? <Link to = "/signIn">Log in here</Link></p>
                    </div>
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
            pauseOnHover={false}/>
        </div>
    )
}

const mapDispatchToProps = {
    signUpUser: usersActions.signUpUser
}

export default connect(null, mapDispatchToProps)(SignUp)
