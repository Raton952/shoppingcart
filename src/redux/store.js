import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

const myLogger = (store) =>(next) => (action)=>{
    // console.log(`Action: ${JSON.stringify(action)}`);
    // console.log(`Before: ${JSON.stringify(store.getState())}`);

    const upComingStep = [action].reduce(rootReducer,store.getState())

    // console.log(`Upcoming: ${JSON.stringify(upComingStep.cartItem)}`);
    console.log(upComingStep.cartItem);
    const item = upComingStep.cartItem.products.find(
        product => product.id === action.payload.id,
    );
    console.log("item",item);

    if(item.qty>=0){
        return next(action)
    }

    

}

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(myLogger)))

export default store;