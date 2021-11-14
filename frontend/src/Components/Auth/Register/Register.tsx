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
import {
   cancelRegisterForm,
   registerUserAction,
} from "../../../Redux/Action/Auth/registerUserAction";
import {
   IRegisterUserResponse,
   IUserAuth,
} from "../../../interfaces/userAuth.interface";
import AlertInfo from "../AlertInfo";
import { RootState } from "../../../Redux/Reducer";

type RegisterProps = {
   open: boolean;
   toogleLogin: () => void;
   setOpen: (open: boolean) => void;
};

/**
 * @description renders the register form
 * for registration the new user.
 *@function Register 
   *@param {boolean} open - open dialog.
   @param {RegisterProps} toogleLogin - toogle login dialog.
   @param {RegisterProps} setOpen - set open dialog.
 * @returns JSX element
 */
export default function Register({
   toogleLogin,
   open,
   setOpen,
}: RegisterProps): JSX.Element {
   const registerResponse: IRegisterUserResponse = useSelector(
      (state: RootState) => state.registerReducer
   );

   const dispatch = useDispatch();

   const [formError, setFormError] = React.useState(false);

   const [userCredentials, setUserCredentials] = React.useState<IUserAuth>({
      userName: "",
      email: "",
      password: "",
   });

   //Handle user input
   const { userName, email, password } = userCredentials;

   /**
    * @function handleClose reset alert messages, user's credentials
    * @dispatch cancel the response message
    * in order to remove Alert bar.
    */
   const handleClose = (): void => {
      setFormError(false);
      resetCredentials();
      setOpen(false);
      if (registerResponse.user?.data?.message) {
         dispatch(cancelRegisterForm());
      }
   };

   /**
    * @function resetCredentials reset the user's credentials
    * update the state with empty values.
    * @return void
    */
   const resetCredentials = () => {
      setUserCredentials({
         userName: "",
         email: "",
         password: "",
      });
   };

   /**
    * @function handleChange handle the user input
    * @param event
    */
   const handleChange = (event: React.FormEvent): void => {
      event.preventDefault();
      const { name, value } = event.target as HTMLSelectElement;
      setUserCredentials({ ...userCredentials, [name]: value });
   };

   /**
    * @function handleSubmit send the user's credentials for registration.
    * @dispatch user's credentials as an action creator.
    * @param event React.FormEvent
    * @returns void
    */
   const handleSubmit = (event: React.FormEvent): void => {
      event.preventDefault();
      if (email && password && userName) {
         dispatch(registerUserAction(userCredentials));
         setFormError(false);
      } else {
         setFormError(true);
      }
      resetCredentials();
      if (registerResponse.user?.data?.success) {
         setOpen(false);
      }
   };

   return (
      <>
         <div>
            <Dialog open={open} onClose={handleClose}>
               <DialogTitle>Register</DialogTitle>
               {registerResponse.user?.data?.message ? (
                  <AlertInfo
                     info={registerResponse.user?.data?.message}
                     status={registerResponse.user?.data?.success}
                  />
               ) : null}
               <DialogContent>
                  <DialogContentText>
                     Please register with your Username, Email and Password.
                  </DialogContentText>
                  <TextField
                     error={formError}
                     autoFocus
                     margin="dense"
                     id="username"
                     label="Username"
                     type="text"
                     fullWidth
                     variant="standard"
                     name={"userName"}
                     value={userName}
                     onChange={handleChange}
                     required={true}
                  />
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
                     required={true}
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
                     required={true}
                  />
               </DialogContent>
               <DialogActions>
                  <ButtonGroup variant="text" aria-label="text button group">
                     <Button variant="outlined" onClick={handleClose}>
                        CANCEL
                     </Button>
                     <Button variant="contained" onClick={handleSubmit}>
                        REGISTER
                     </Button>
                  </ButtonGroup>
               </DialogActions>
               <div className="text-center">
                  <p>Already have an account? </p>
                  <Button onClick={toogleLogin}>Login</Button>
               </div>
            </Dialog>
         </div>
      </>
   );
}
