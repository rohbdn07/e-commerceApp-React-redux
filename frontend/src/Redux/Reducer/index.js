import { combineReducers } from "redux";
import productReducer from "./productReducer";
import detailPageBanner from "./detailPageBanner";

const rootReducer = combineReducers({
   productReducer,
   detailPageBanner,
});

export default rootReducer;
