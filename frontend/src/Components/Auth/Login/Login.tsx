import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ILoginState, IUserAuth } from "../../../interfaces/userAuth.interface";
import AlertInfo from "../AlertInfo";
import {
   cancelLoginForm,
   loginUserAction,
} from "../../../Redux/Action/Auth/loginUserAction";
import { RootState } from "../../../Redux/Reducer";

type LoginProps = {
   open: boolean;
   toogleRegister: () => void;
   setOpen: (open: boolean) => void;
};

/**
 * @description renders the login form and handles the login process
 * @function Login
 * @param {LoginProps} open - open dialog
 * @param {LoginProps} toogleRegister - toogle register
 * @param {LoginProps} setOpen - set open dialog
 * @returns {JSX.Element} - JSX element
 */
export default function Login({
   toogleRegister,
   open,
   setOpen,
}: LoginProps): JSX.Element {
   // Redux: get login state
   const loginUser: ILoginState = useSelector(
      (state: RootState) => state.loginReducer
   );

   const [formError, setformError] = React.useState(false);

   const dispatch = useDispatch();

   const [userLogin, setUserLogin] = React.useState<IUserAuth>({
      email: "",
      password: "",
   });

   const { email, password } = userLogin;

   // const handleClickOpen = () => {
   //    if (loginUser.user.data?.token) {
   //       setOpen(false);
   //    }
   // };

   const handleClose = (): void => {
      setformError(false);
      resetCredentials();
      setOpen(false);
      if (loginUser.user.data?.message) {
         dispatch(cancelLoginForm());
      }
   };

   const resetCredentials = () => {
      setUserLogin({
         email: "",
         password: "",
      });
   };

   /**
    * @description handle change input
    * @function handleChange
    * @param {event} event
    * @returns {void} void
    */
   const handleChange = (event: React.FormEvent): void => {
      event.preventDefault();
      const { name, value } = event.target as HTMLSelectElement;
      setUserLogin({ ...userLogin, [name]: value });
   };

   /**
    * @function handleSubmit send the user's credentials for registration.
    * @dispatch user's credentials as an action creator.
    * @restCredentials it reset to initial state
    * @returns void
    */
   const handleSubmit = (event: React.FormEvent): void => {
      event.preventDefault();
      if (email && password) {
         setformError(false);
         dispatch(loginUserAction(userLogin));
         resetCredentials();
      } else {
         setformError(true);
      }
   };

   return (
      <div>
         <Dialog
            open={open}
            onClose={handleClose}
            className={loginUser.user.data?.success ? "d-none" : "d-block"}
         >
            {loginUser.user.data?.message ? (
               <AlertInfo info={loginUser.user.data?.message} />
            ) : null}
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
               <DialogContentText>
                  Please enter your email address and Password.
               </DialogContentText>
               <TextField
                  error={formError}
                  autoFocus
                  margin="dense"
                  id="email"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="standard"
                  name={"email"}
                  value={email}
                  onChange={handleChange}
               />
               <TextField
                  error={formError}
                  autoFocus
                  margin="dense"
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth
                  variant="standard"
                  name={"password"}
                  value={password}
                  onChange={handleChange}
               />
            </DialogContent>
            <DialogActions>
               <ButtonGroup variant="text" aria-label="text button group">
                  <Button onClick={handleClose}>CANCEL</Button>
                  <Button onClick={handleSubmit}>LOGIN</Button>
               </ButtonGroup>
            </DialogActions>
            <div className="text-center">
               <p>New in Rb Store? Create an account.</p>
               <Button onClick={toogleRegister}> Register</Button>
            </div>
         </Dialog>
      </div>
   );
}
