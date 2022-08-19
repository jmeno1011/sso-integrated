import { combineReducers } from "redux";
import counter from "./counter"
import counterAction from "./redux-actions.counter"

const rootReducer = combineReducers({
    counter,
    counterAction
})

export default rootReducer;