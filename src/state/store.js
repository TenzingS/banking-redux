import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)  //need this middleware so redux works asynchronously 
)