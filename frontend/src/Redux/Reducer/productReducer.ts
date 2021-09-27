/* eslint-disable array-callback-return */
import { IProductItems } from "../../Components/CartItems/CartItems";
import { Action } from "../Action/actionInterface";
import { ActionType } from "../Action/actionTypes";
import { IFetchedData } from "../Action/getProducts-Action";


interface Iinitalstate {
   allProducts: IFetchedData[] 
   selectedItems: IFetchedData[]
   price: number
   totalPrice: number
   qty: number
   isAdded: boolean
}

export interface IselectedProducts {
   item: IProductItems[]
}

const storeAllProducts = localStorage.getItem("allProduct");
const storeSelectedItems = localStorage.getItem("selectedProduct");

const initalstate: Iinitalstate = {
   allProducts: storeAllProducts ? JSON.parse(storeAllProducts) : [],
   selectedItems: storeSelectedItems ? JSON.parse(storeSelectedItems) : [],
   price: 0,
   totalPrice: 0,
   qty: 0,
   isAdded: false,
};
// JSON.parse(localStorage.getItem('selectedProduct') || '[]')

export default function productReducer(state = initalstate, action: Action) {
   switch (action.type) {
      case ActionType.GET_PRODCUTS:
         return {
            ...state,
            allProducts: action.payload,
         };

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

         const checkItem = state.selectedItems.find(
            (item) => item.id === action.payload
         );

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
            (item ) => item.id !== action.payload
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
               console.log("the item qty is", item.qty);
               return {
                  ...item,
                  qty: (item.qty += 1),
               };
            } else {
               return item;
            }
         });
         console.log("the updated cart is", increaseQtyUpdate);
         return { ...state, selectedItems: increaseQtyUpdate };

      case ActionType.DECREASE_CART_QTY:
         const decreaseQtyUpdate = state.selectedItems
            .map((item) => {
               if (item.id === action.payload.id) {
                  console.log("the item qty is", item.qty);
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

      default:
         return state;
   }
}
