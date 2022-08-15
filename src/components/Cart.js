import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  removeProduct
} from "../redux/shoppingCart/action.creator";
import TotalIem from "./TotalIem";
import TotalPrice from "./TotalPrice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalItems = cartItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  const incrementItem = (product) => {
    dispatch(addProduct(product));
  };

  const decrementItem = (product) => {
    dispatch(removeProduct(product));
  };
  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between border-b-2 mb-2">
            <div className="text-lg py-2">
              <p>{item.name}</p>
            </div>
            <div className="text-lg py-2">
              <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                <button
                  className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                  onClick={() => decrementItem(item)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 12H6"
                    />
                  </svg>
                </button>
                <p>{item.quantity}</p>
                <button
                  className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                  onClick={() => incrementItem(item)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}

        <TotalIem totalItems={totalItems} />
      </div>
      <TotalPrice totalPrice={totalPrice} />
    </div>
  );
};

export default Cart;
