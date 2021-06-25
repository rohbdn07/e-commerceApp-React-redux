import { GET_PRODCUTS, ADD_CART, REMOVE_CART_ITEM } from '../Constants/action-types';

const initalstate = {
    allProducts : [],
    selectedItems : JSON.parse(localStorage.getItem('selectedProduct') || '[]') 
}
// JSON.parse(localStorage.getItem('selectedProduct') || '[]') 

export default function productReducer(state = initalstate, action) {

   switch (action.type) {
       case GET_PRODCUTS:
           return {
               ...state, 
              allProducts : action.payload
           }
           break;

        case ADD_CART:
                const selectedProduct= state.allProducts.filter((item)=> item.id == action.payload);
                const checkItem = state.selectedItems.find((item)=> item.id == action.payload);
                localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
                if (!checkItem) {
                    // localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
                    return {
                        ...state,
                     selectedItems: [...state.selectedItems, ...selectedProduct]
                     
                    }
                } else {
                     alert('the item is already added to cart')
                     return state;
                    
                }
                break;

        case REMOVE_CART_ITEM:
                const filteredItem = state.selectedItems.filter((item)=> item.id !== action.payload);
                console.log('the filteredItem is', filteredItem)
                if(filteredItem.length >= 0 ) {
                    localStorage.removeItem('selectedProduct');
                    return {
                        ...state,
                         selectedItems: [...filteredItem]
                         
                    }
                } else {
                    // localStorage.removeItem('selectedProduct');
                    return {
                        ...state
                    };
                }
                break;
        
   
       default:
           return state
   }
}
