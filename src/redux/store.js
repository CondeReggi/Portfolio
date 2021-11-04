import { createStore , combineReducers } from "redux";
import modalReducer from "./reducers/modalReducer";
import darkmodeReducer from "./reducers/darkmodeReducer";

const appReducer = combineReducers({
    modalReducer: modalReducer,
    darkmodeReducer: darkmodeReducer,
})

export default createStore(appReducer)