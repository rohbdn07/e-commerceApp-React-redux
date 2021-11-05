import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRegisterUserResponse } from "../../../interfaces/userAuth.interface";
import { logoutAction } from "../../../Redux/Action/Auth/loginUserAction";
import { RootState } from "../../../Redux/Reducer";
import Login from "../Login/Login";
import Register from "../Register/Register";
import "./Login_register.scss";
import Button from "@mui/material/Button";
import { accountInitialValues } from "../Helpers/account/Toggle";

/**
 *
 * @returns {JSX.Element} JSX Element
 */
export default function LoginRegister(): JSX.Element {
   const [open, setOpen] = React.useState(false);

   const registerUser: IRegisterUserResponse = useSelector(
      (state: RootState) => state.registerReducer
   );

   const dispatch = useDispatch();

   const [account, toggleAccount] = React.useState(accountInitialValues.login);

   const displayUsername = (): string | null => {
      const getUserFromLocalStroage: string | null =
         localStorage.getItem("user");
      const user = getUserFromLocalStroage
         ? JSON.parse(getUserFromLocalStroage)
         : [];

      if (user) {
         const userName: string = user.userName;
         return userName;
      }
      return null;
   };

   const loggedUserName: string | null = displayUsername();

   const logoutUser = () => {
      dispatch(logoutAction());
   };

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

   const isSuccess: boolean = registerUser.user.data?.success;

   return (
      <>
         <div className="welcome_section">
            <p>Welcome!</p>
            <div className="d-flex login_section">
               {loggedUserName ? (
                  <div className="d-flex">
                     <p>{loggedUserName}</p>|<p onClick={logoutUser}>Logout</p>
                  </div>
               ) : (
                  <Button variant="outlined" onClick={() => openDialog()}>
                     Login
                  </Button>
               )}

               {account.view === "login" || isSuccess ? (
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
