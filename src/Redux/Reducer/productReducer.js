import { GET_PRODCUTS } from '../Constants/action-types';

const initalstate = {
    allProducts : []
}

export default function productReducer(state = initalstate, action) {

   switch (action.type) {
       case GET_PRODCUTS:
           return {
               ...state, 
              allProducts : action.payload
           }
   
       default:
           return state
   }
}
