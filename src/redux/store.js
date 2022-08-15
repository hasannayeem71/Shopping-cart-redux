import { applyMiddleware, createStore } from "redux";
import prevent from "./middlewares/prevent";
import rootReducer from "./rootReducer";

export const store = createStore(rootReducer,applyMiddleware(prevent));
