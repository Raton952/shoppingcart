import { ADD_TO_CART, REMOVE_TO_CART } from "./actionTypes"

export const addToCart = (value) =>{
    return{
        type:ADD_TO_CART,
        payload:value
    }
}
export const removeToCart = (value) =>{
   
    return{
        type:REMOVE_TO_CART,
        payload:value
    }
}