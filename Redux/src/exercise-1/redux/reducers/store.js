import { createStore } from "redux";
import { countReducer } from "../reducers/reducer";
const store = createStore(countReducer);
export default store;
