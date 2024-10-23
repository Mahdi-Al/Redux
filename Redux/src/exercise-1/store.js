import { createStore } from "redux";
import { countReducer } from "./redux/reducers/reducer";
const store = createStore(countReducer);
export default store;
