import {REMOVE_CART_ITEM} from  '../Constants/action-types';

export const removeFromcart = (itemId) => {
    
    return (
    {
        type: REMOVE_CART_ITEM,
        payload: itemId
    }
)
}