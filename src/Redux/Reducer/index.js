import { combineReducers } from 'redux';
import productReducer from './productReducer';
import addToCartReducer from './addToCartReducer';


const rootReducer = combineReducers({
            productReducer,
            addToCartReducer
        })
    

export default rootReducer;