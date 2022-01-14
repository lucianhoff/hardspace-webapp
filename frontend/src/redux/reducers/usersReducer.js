const usersReducer = (state= {token:'', firstName:null, image:null, _id:null}, action) => {
    switch (action.type){
        case "LOG_USER" :
            localStorage.setItem('token',action.payload.token)
            return {
                ...state,
                token: action.payload.token,
                firstName:action.payload.firstName,
                image: action.payload.image,
                _id:action.payload._id
            }
        case "LOG_OUT_USER" :
            localStorage.removeItem('token')
            return{
                token:null,
                firstName:null,
                image:null,
                _id:null
            }
    default: 
    return state    
    }
}

export default usersReducer 
