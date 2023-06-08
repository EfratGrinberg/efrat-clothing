import { createContext, useReducer, dispatch } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //new product
  return [...cartItems, { ...productToAdd, quantity: 1 }];

  //existing product
};

const RemoveCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id != cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const ClearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id != cartItemToClear.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFormCart: () => {},
  cartCount: 0,
  cartTotal: 0
});

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0
};

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN"
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload
      };
    default:
      throw new Error("Unhandle type of ${type} in cartReducer");
  }
  return;
};

const AddToCartAction = (itemToAdd) => {
  dispatch(createAction("ADD_TO_CART",itemToAdd));
};

export const CartProvider = ({ children }) => {
  const [{ cartItems, isCartOpen, cartCount, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const udateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, carItem) => total + carItem.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (total, carItem) => total + carItem.quantity * carItem.price,
      0
    );
    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    udateCartItemsReducer(newCartItems);
  };

  const removeItemToCart = (productToRemove) => {
    const newCartItems = RemoveCartItem(cartItems, productToRemove);

    udateCartItemsReducer(newCartItems);
  };

  const clearItemFormCart = (cartItemToClear) => {
    const newCartItems = ClearCartItem(cartItems, cartItemToClear);
    udateCartItemsReducer(newCartItems);
  };

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,bool));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    clearItemFormCart,
    cartItems,
    cartCount,
    cartTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
