import {
  DECREASE_CART_QTY,
  INCREASE_CART_QTY,
} from "../Constants/action-types";

export const increaseQty = (item) => {
  return {
    type: INCREASE_CART_QTY,
    payload: item,
  };
};

export const decreaseQty = (item) => {
  return {
    type: DECREASE_CART_QTY,
    payload: item,
  };
};