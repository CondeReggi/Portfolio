import { createStore , combineReducers } from "redux";
import modalReducer from "./reducers/modalReducer";

const appReducer = combineReducers({
    modalReducer: modalReducer,
})

export default createStore(appReducer)