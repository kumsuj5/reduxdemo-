import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import reducer from "./user/userReducer";



const rootReducer = combineReducers({
    cake: cakeReducer,
    ice: iceCreamReducer,
    user: reducer
})

export default rootReducer