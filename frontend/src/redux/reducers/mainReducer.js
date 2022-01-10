import { combineReducers } from 'redux'
import usersReducer from "./usersReducer";
import productsReducer from "./productsReducer"

const mainReducer = combineReducers({
    users: usersReducer,
    productsReducer:productsReducer,
})

export default mainReducer