import { GET_PRODCUTS } from "../Constants/action-types";

export const getProductsAction = (data) => {
  return {
    type: GET_PRODCUTS,
    payload: data,
  };
};
