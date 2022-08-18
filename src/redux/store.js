import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

const myLogger = (store) =>(next) => (action)=>{
   

    const upComingStep = [action].reduce(rootReducer,store.getState())

   
    const item = upComingStep.cartItem.products.find(
        product => product.id === action.payload.id,
    );
   

    if(item.totalThisItem  >=0){
        if( item.qty >=0){
            return next(action)
        }
       
    }
   

    

}

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(myLogger)))

export default store;