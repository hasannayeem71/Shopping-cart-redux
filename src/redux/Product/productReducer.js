import { products } from "../../static/products";
import { DECREMENT_PRODUCT, INCREMENT_PRODUCT } from "./action.type";
const initialState = {
  products: products,
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        }),
      };

    case DECREMENT_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          }
          return product;
        }),
      };

    default:
      return state;
  }
};
