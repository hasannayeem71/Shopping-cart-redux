import { DECREMENT_PRODUCT, INCREMENT_PRODUCT } from "./action.type";

export const incrementProduct = (product) => {
  return {
    type: INCREMENT_PRODUCT,
    payload: product,
  };
};

export const decrementProduct = (product) => {
  return {
    type: DECREMENT_PRODUCT,
    payload: product,
  };
};
