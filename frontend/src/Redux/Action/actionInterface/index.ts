import { IProductItems } from "../../../Components/CartItems/CartItems";
import IUserAuth from "../../../interfaces/userAuth.interface";
import { ActionType } from "../actionTypes";
import { IFetchedData } from "../getProducts-Action";

interface GetLoadingState {
   type: ActionType.GET_LOADING_STATE
}

interface GetProductLoadingError {
   type: ActionType.PRODUCT_LOADING_ERROR
}

interface GetProductInDetailPage {
   type: ActionType.GET_PRODUCT_IN_DETAILPAGE_BANNER;
   payload: IProductItems;
}

interface GetAllProducts {
   type: ActionType.GET_PRODCUTS;
   payload: IFetchedData[];
}

interface AddCart {
   type: ActionType.ADD_CART;
   payload: number;
}

interface RemoveCartItem {
   type: ActionType.REMOVE_CART_ITEM;
   payload: number;
}

interface IncreaseCartQty {
   type: ActionType.INCREASE_CART_QTY;
   payload: IProductItems
}

interface DecreaseCartQty {
   type: ActionType.DECREASE_CART_QTY;
   payload: IProductItems
}

interface GetTotalPrice {
   type: ActionType.GET_TOTAL_PRICE;
   paylaod: null
}

interface GetFilteredProduct {
   type: ActionType.GET_FILTERED_PRODUCTS
   payload: Array<number>
}

interface GetSearchedProduct {
   type: ActionType.GET_SEARCH_PRODUCTS
   payload: string
}

interface GetRegisterUser {
   type: ActionType.REGISTER_USER
   payload: IUserAuth
}

interface GetLoginUser {
   type: ActionType.LOGIN_USER
   payload: IUserAuth
}

interface CancelRegisterForm {

   type: ActionType.CANCEL_REGISTER_FORM
}

export type Action =
   | GetLoadingState
   | GetProductLoadingError
   | GetProductInDetailPage
   | GetAllProducts
   | AddCart
   | RemoveCartItem
   | IncreaseCartQty
   | DecreaseCartQty
   | GetTotalPrice
   | GetFilteredProduct
   | GetSearchedProduct
   | GetRegisterUser
   | GetLoginUser
   | CancelRegisterForm;
