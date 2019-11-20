import {createStore} from "redux";
import columnReducer from "./column-reducer";

let store = createStore(columnReducer);

export default store;
