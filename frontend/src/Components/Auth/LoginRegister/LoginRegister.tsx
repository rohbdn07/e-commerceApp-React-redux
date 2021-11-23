import React from "react";
import { useSelector } from "react-redux";
import {
   ILoginState,
   IRegisterUserResponse,
} from "../../../interfaces/userAuth.interface";
import { RootState } from "../../../Redux/Reducer";
import Login from "../Login/Login";
import Register from "../Register/Register";
import "./Login_register.scss";
import Button from "@mui/material/Button";
import { accountInitialValues } from "../Helpers/account/Toggle";
import useLogoutUser from "../logout/useLogoutUser";

/**
 *
 * @returns {JSX.Element} JSX Element
 */
export default function LoginRegister(): JSX.Element {
   const [open, setOpen] = React.useState(false);

   const [userName, setUserName] = React.useState("");

   const registerUser: IRegisterUserResponse = useSelector(
      (state: RootState) => state.registerReducer
   );

   const loginUser: ILoginState = useSelector(
      (state: RootState) => state.loginReducer
   );

   // const dispatch = useDispatch();

   //use of custom hook: useLogoutUser to dispatch logout action
   const logout: () => void = useLogoutUser();

   const [account, toggleAccount] = React.useState(accountInitialValues.login);

   // const isSuccess: boolean = registerUser.user?.data?.success;

   React.useEffect(() => {
      const displayUsername = () => {
         const getUserFromLocalStroage: string | null =
            localStorage.getItem("user");
         const user = getUserFromLocalStroage
            ? JSON.parse(getUserFromLocalStroage)
            : {};

         if (user) {
            const userName: string = user.userName;
            setUserName(userName);
         }
      };
      displayUsername();
   }, [loginUser]);

   //toggle between login and register form
   const toggleRegister = (): void => {
      toggleAccount(accountInitialValues.signup);
   };

   //toggle between login and register form
   const toggleLogin = (): void => {
      toggleAccount(accountInitialValues.login);
   };

   // const handleClose = (): void => {
   //    setOpen(false);
   //    toggleAccount(accountInitialValues.login);
   // };

   const openDialog = (): void => {
      setOpen(true);
   };

   return (
      <>
         <div className="welcome_section">
            {userName && userName ? <p>Welcome!</p> : null}
            <div className="d-flex login_section">
               {userName && userName ? (
                  <div className="d-flex">
                     <p>{userName}</p>|<p onClick={() => logout()}>Logout</p>
                  </div>
               ) : (
                  <Button
                     variant="contained"
                     color="primary"
                     onClick={openDialog}
                  >
                     Login
                  </Button>
               )}

               {account.view === "login" ? (
                  <Login
                     toogleRegister={toggleRegister}
                     open={open}
                     setOpen={setOpen}
                  />
               ) : (
                  <Register
                     toogleLogin={toggleLogin}
                     open={open}
                     setOpen={setOpen}
                  />
               )}
            </div>
         </div>
      </>
   );
}
