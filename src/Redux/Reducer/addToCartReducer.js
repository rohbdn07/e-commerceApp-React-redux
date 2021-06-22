import { SELECT_ITEM } from '../Constants/action-types';

const initalstate = {
    selectedItems : JSON.parse(localStorage.getItem('selectedProduct') || '[]') 
}

export default function addToCartReducer(state = initalstate, action) {

   switch (action.type) {
       case SELECT_ITEM:
           return {
               ...state,
               selectedItems: action.payload,
               
           }
           
   
       default:
           return state
   }
}
