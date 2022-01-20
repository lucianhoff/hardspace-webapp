import axios from 'axios'

  export const uploadFile = async (newUser) =>{
            try {
                const user = await axios.post('https://hardspace--webapp.herokuapp.com/api/user/signup',
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
        };
  export const deleteFile = async(closeuser)=>{
      const user = axios.post('https://hardspace--webapp.herokuapp.com/api/user/signup',{closeuser})
                    localStorage.removeItem('token')
                    localStorage.removeItem('userConected')
    } 
    export const  getFiles = async(logedUser) => {
            try {
                const user = await axios.post('https://hardspace--webapp.herokuapp.com/api/user/signup',
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


