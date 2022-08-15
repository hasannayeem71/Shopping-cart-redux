import { ADD_PRODUCT, REMOVE_PRODUCT } from "./action.type";

export const addProduct = (value) => {
  
  return {
    type: ADD_PRODUCT,
    payload: value,
  };
};

export const removeProduct = (value) => {
  return {
    type: REMOVE_PRODUCT,
    payload: value,
  };
};
