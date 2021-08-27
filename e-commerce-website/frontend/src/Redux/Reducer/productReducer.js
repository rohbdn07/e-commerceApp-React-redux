import {
   GET_PRODCUTS,
   ADD_CART,
   REMOVE_CART_ITEM,
   INCREASE_CART_QTY,
   DECREASE_CART_QTY,
   GET_TOTAL_PRICE,
} from "../Constants/action-types";

const initalstate = {
   allProducts: localStorage.getItem("allProducts")
      ? JSON.parse(localStorage.getItem("allProducts"))
      : [],
   selectedItems: localStorage.getItem("selectedProduct")
      ? JSON.parse(localStorage.getItem("selectedProduct"))
      : [],
   price: 0,
   // totalPrice: 0,
   qty: 0,
   isAdded: false,
};
// JSON.parse(localStorage.getItem('selectedProduct') || '[]')

export default function productReducer(state = initalstate, action) {
   switch (action.type) {
      case GET_PRODCUTS:
         return {
            ...state,
            allProducts: action.payload,
         };

      case ADD_CART:
         localStorage.setItem(
            "selectedProduct",
            JSON.stringify(state.selectedItems)
         );
         const selectedProduct = state.allProducts.filter((item) => {
            if (item.id === action.payload) {
               return (item.qty = 1), item;
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

      case REMOVE_CART_ITEM:
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

      case INCREASE_CART_QTY:
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

      case DECREASE_CART_QTY:
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

      case GET_TOTAL_PRICE:
         const { totalPrice } = state.selectedItems.reduce(
            (accum, currValue) => {
               const { price, qty } = currValue;
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
