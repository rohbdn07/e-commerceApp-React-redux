/* eslint-disable array-callback-return */
import { IProductItems } from "../../Components/CartItems/CartItems";
import { Action } from "../Action/actionInterface";
import { ActionType } from "../Action/actionTypes";
import { IFetchedData } from "../Action/getProducts-Action";
export interface Iinitalstate {
   loading: boolean
   allProducts: IFetchedData[]
   selectedItems: IFetchedData[]
   filterRangeValue: number[]
   searchProduct: string | null
   price: number
   totalPrice: number
   qty: number
   isAdded: boolean
   errMessage: string
}

export interface IselectedProducts {
   item: IProductItems[]
}

const storeAllProducts = localStorage.getItem("allProduct");
const storeSelectedItems = localStorage.getItem("selectedProduct");

const initalstate: Iinitalstate = {
   loading: false,
   allProducts: storeAllProducts ? JSON.parse(storeAllProducts) : [],
   selectedItems: storeSelectedItems ? JSON.parse(storeSelectedItems) : [],
   filterRangeValue: [],
   searchProduct: null,
   price: 0,
   totalPrice: 0,
   qty: 0,
   isAdded: false,
   errMessage: ''
};
// JSON.parse(localStorage.getItem('selectedProduct') || '[]')


export default function productReducer(state = initalstate, action: Action) {
   switch (action.type) {
      case ActionType.GET_LOADING_STATE:
         return {
            ...state,
            loading: true
         }

      case ActionType.GET_PRODCUTS:
         return {
            ...state,
            loading: false,
            allProducts: action.payload,
            errMessage: '',
         };

      case ActionType.PRODUCT_LOADING_ERROR:
         return {
            ...state,
            loading: false,
            errMessage: 'Opps! Server error! Cannot load more'
         }

      case ActionType.ADD_CART:
         localStorage.setItem(
            "selectedProduct",
            JSON.stringify(state.selectedItems)
         );
         const selectedProduct = state.allProducts.filter((item) => {
            if (item.id === action.payload) {
               return (item.qty = 1, item)
            }
         });

         const checkItem = state.selectedItems.some((item) => item.id === action.payload);

         if (!checkItem) {

            return {
               ...state,
               selectedItems: [...state.selectedItems, ...selectedProduct],
            };

         } else if (checkItem) {
            alert("the item is already added to cart");
            return state;
         }

         break;

      case ActionType.REMOVE_CART_ITEM:
         const filteredItem = state.selectedItems.filter(
            (item) => item.id !== action.payload
         );

         if (filteredItem.length >= 0) {
            localStorage.setItem(
               "selectedProduct",
               JSON.stringify(filteredItem)
            );
            return {
               ...state,
               selectedItems: [...filteredItem],
            };
         } else {
            return {
               ...state,
            };
         }

      case ActionType.INCREASE_CART_QTY:
         const increaseQtyUpdate = state.selectedItems.map((item) => {
            if (item.id === action.payload.id) {
               return {
                  ...item,
                  qty: (item.qty += 1),
               };
            } else {
               return item;
            }
         });
         return { ...state, selectedItems: increaseQtyUpdate };

      case ActionType.DECREASE_CART_QTY:
         const decreaseQtyUpdate = state.selectedItems
            .map((item) => {
               if (item.id === action.payload.id) {
                  return {
                     ...item,
                     qty: item.qty - 1,
                  };
               } else {
                  return item;
               }
            })
            .filter((item) => item.qty !== 0);
         localStorage.setItem(
            "selectedProduct",
            JSON.stringify(decreaseQtyUpdate)
         );
         return { ...state, selectedItems: decreaseQtyUpdate };

      case ActionType.GET_TOTAL_PRICE:
         const { totalPrice }: any = state.selectedItems.reduce(
            (accum, currValue) => {
               const { price, qty }: any = currValue;
               const updatedTotalAmount = price * qty;
               accum.totalPrice += updatedTotalAmount;
               return accum;
            },
            { totalPrice: 0 }
         );

         return { ...state, totalPrice };

      case ActionType.GET_FILTERED_PRODUCTS:
         return {
            ...state,
            filterRangeValue: action.payload
         }

      case ActionType.GET_SEARCH_PRODUCTS:
         if (action.payload) {
            return {
               ...state,
               searchProduct: action.payload
            }
         } else {
            if (!action.payload) {
               return {
                  ...state,
                  searchProduct: null
               }
            }
         }
         break;
      default:
         return state;
   }
}
