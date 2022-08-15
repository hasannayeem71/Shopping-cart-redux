import { decrementProduct, incrementProduct } from "../Product/action.creator";
import { ADD_PRODUCT, REMOVE_PRODUCT } from "../shoppingCart/action.type";

const prevent = (store) => (next) => (action) => {
  if (action.type === ADD_PRODUCT) {
    const availableProducts = store.getState().product.products;
    const product = availableProducts.find(
      (product) => product.id === action.payload.id
    );

    if (product.quantity === 0) {
      alert("Product is out of stock");
      return;
    }
    store.dispatch(decrementProduct(product));
  } else if (action.type === REMOVE_PRODUCT) {
    const availableCartProducts = store.getState().cart.cartItems;
    const product = availableCartProducts.find(
      (product) => product.id === action.payload.id
    );
    if (product.quantity !== 0) {
      store.dispatch(incrementProduct(product));
    }
  }
  next(action);
};

export default prevent;
