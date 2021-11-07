import { combineReducers } from "redux";
import productReducer from "./productReducer";
import detailPageBanner from "./detailPageBanner";
import registerReducer from "./AuthReducer/registerReducer";
import loginReducer from "./AuthReducer/loginReducer";

const rootReducer = combineReducers({
   productReducer,
   detailPageBanner,
   registerReducer,
   loginReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
