import axios from 'axios'

const usersActions = {
    signUpUser: (newUser) => {
        return async (dispatch, getState) => {
            try {
                let response = await axios.post('http://localhost:4000/api/user/signup', newUser)
                if (response.data.success) {
                    dispatch({ type: "LOG_USER", payload: response.data.response })
                }
                return response
            } catch (error) {
                console.log(error)
            }
        }
    },
    signInUser: (logInUser) => {
        return async (dispatch, getState) => {
        try{
            let response = await  axios.post('http://localhost:4000/api/user/signin', logInUser)
            if(response.data.success){
            
                dispatch({type:"LOG_USER", payload: response.data.response})
            }
            return response
            
        }catch (error){
            console.log(error)
        }
        }
    },
    signOutUser: () => {
        return (dispatch, getState) => {
            dispatch({ type: "LOG_OUT_USER" })
        }
    },
    signInLS: (token) => {
        return async (dispatch, getState) => {
            try {
                let response = await axios.get('http://localhost:4000/api/verifyToken', {
            headers: {
                Authorization: 'Bearer '+ token,
            }
        })
            dispatch({type:"LOG_USER", payload:{token, firstName:response.data.firstName, image: response.data.image, admin: response.data.admin, lastName: response.data.lastName, favourites: response.data.favourites , _id:response.data._id}})// , birthday: response.data.birthday
            }catch(error) {
            return dispatch({type:'LOG_OUT_USER' })
            }
        }
    },
    uploadFile : async (newUser) =>{
        try {
            const user = await axios.post('http://localhost:4000/api/user/signup',
            {newUser})
            if(user.data.success && !user.data.error){
                localStorage.setItem('token',user.data.response.token)
                return {success:true, response:user.data}
            }else{
            
                return {success:false, response:user.data.response}
            }
        }catch(error){
            console.log(error)
        }
    },
    deleteFile : async(closeuser)=>{
        const user = axios.post('http://localhost:4000/api/user/signup',{closeuser})
                    localStorage.removeItem('token')
                    localStorage.removeItem('userConected')
    },
    getFiles : async(logedUser) => {
        try {
            const user = await axios.post('http://localhost:4000/api/user/signup',
            {logedUser})
            if(user.data.success && !user.data.error){
                localStorage.setItem('token',user.data.response.token)
                localStorage.setItem('userConected', JSON.stringify(user.data.response.userData))
                return {success:true, user}
            }else{ return ({sucess:user.data.success, response:user})}
        }catch(error){
            console.log(error)
        }
    
}
}

export default usersActions