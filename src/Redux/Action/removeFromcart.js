import {REMOVE_CART_ITEM} from  '../Constants/action-types';

export const removeFromcart = (filteredItem) => {
    
    return (
       {
           type: REMOVE_CART_ITEM,
           payload: filteredItem
       }
   )
}