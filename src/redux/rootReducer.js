import { combineReducers } from "redux";
import { productReducer } from "./Product/productReducer";
import { cartReducer } from "./shoppingCart/cartReducer";

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
});

export default rootReducer;
