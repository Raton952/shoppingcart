import { combineReducers } from "redux";
import shoppingCart from "./shopping/shoppingReducer";

const rootReducer = combineReducers({
    cartItem:shoppingCart
})

export default rootReducer