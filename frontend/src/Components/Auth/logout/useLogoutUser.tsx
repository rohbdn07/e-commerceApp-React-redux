import { useDispatch } from "react-redux";
import { logoutAction } from "../../../Redux/Action/Auth/loginUserAction";

// export const logoutUser = () => {
//    const dispatch = useDispatch();
//    dispatch(logoutAction());
// };

const useLogoutUser = () => {
   const dispatch = useDispatch();
   const logout = () => {
      dispatch(logoutAction());
   };
   return logout;
};
export default useLogoutUser;
