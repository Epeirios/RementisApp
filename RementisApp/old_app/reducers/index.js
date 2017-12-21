import { combineReducers } from "redux";
import ListReducer from "./ListReducer";

export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer,
        ListReducer: ListReducer
    });
}
