let initialState = {
    token: '',
    firstName: null,
    image: null,
    _id: null,
    users: {},
    admin: false,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOG_USER":
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                token: action.payload.token,
                firstName: action.payload.firstName,
                image: action.payload.image,
                _id: action.payload._id,
                admin: action.payload.admin
            }
        case "LOG_OUT_USER":
            localStorage.removeItem('token')
            return {
                token: null,
                firstName: null,
                image: null,
                _id: null
            }
        case "USERS":
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}

export default usersReducer
