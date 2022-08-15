import { ADD_PRODUCT, REMOVE_PRODUCT } from "./action.type";

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const available = state.cartItems.filter(
        (product) => product.id === action.payload.id
      );

      if (available.length > 0) {
        return {
          ...state,
          cartItems: state.cartItems.map((product) => {
            if (product.id === action.payload.id) {
              return {
                ...product,
                quantity: product.quantity + 1,
              };
            }
            return product;
          }),
        };
      } else
        return {
          ...state,

          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };

    case REMOVE_PRODUCT:
      return {
        ...state,
        cartItems: state.cartItems.map((product) => {
          if (product.id === action.payload.id) {
            // remove product if quantity is 1
            if (product.quantity === 0) {
              return product;
            }
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
