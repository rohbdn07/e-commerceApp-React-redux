import { getProductsAction } from "../Redux/Action/getProducts-Action";
import { axiosFetchAPI } from "./axios";

export const getProductsAPI = async (setLoading, dispatch) => {
  try {
    setLoading(true);
    const { data } = await axiosFetchAPI.get(axiosFetchAPI.baseUrl);
    dispatch(getProductsAction(data));
    setLoading(false);
  } catch (error) {
    console.log("server error", error);
  }
};
