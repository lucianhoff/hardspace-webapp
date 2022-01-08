import { combineReducers } from 'redux'
import usersReducer from "./usersReducer";

const mainReducer = combineReducers({
    users: usersReducer,
})

export default mainReducer