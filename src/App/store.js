import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk"
import counterReducer from "./Features/Counter/Reducer";


let rootReducers = combineReducers ({
    Counter : counterReducer
})

const composeEnhancers = window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__ || compose;
// let store = createStore (rootReducers, composeEnhancers())
let store = createStore (rootReducers, composeEnhancers(applyMiddleware(thunk)))

export default store; 
