import { combineReducers } from "redux";
import productReducer from "./productReducer";
import detailPageBanner from "./detailPageBanner";
import registerReducer from "./AuthReducer/registerReducer";

const rootReducer = combineReducers({
   productReducer,
   detailPageBanner,
   registerReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
