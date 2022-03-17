import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./reducers";

const rootReducer = combineReducers({
    reducers: reducers,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
