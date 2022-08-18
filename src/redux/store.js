import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

const myLogger = (store) =>(next) => (action)=>{
    // console.log(`Action: ${JSON.stringify(action)}`);
    // console.log(`Before: ${JSON.stringify(store.getState())}`);

    const upComingStep = [action].reduce(rootReducer,store.getState())

    // console.log(`Upcoming: ${JSON.stringify(upComingStep)}`);


    return next(action)
}

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(myLogger)))

export default store;