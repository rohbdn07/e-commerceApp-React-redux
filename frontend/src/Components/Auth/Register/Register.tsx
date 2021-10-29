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
import IUserAuth from "../../../interfaces/userAuth.interface";
import AlertInfo from "./AlertInfo";
import { RootState } from "../../../Redux/Reducer";

interface IRegisterUserResponse {
   registerdUserResponse: {
      message: string;
   };
}

/**
 *@function Register use for registration the new user.
 * @returns JSX element
 */

export default function Register() {
   const authResponse: IRegisterUserResponse = useSelector(
      (state: RootState) => state.registerReducer
   );

   const dispatch = useDispatch();

   const [alertInfo, setAlertInfo] = React.useState("");

   const [open, setOpen] = React.useState(false);

   //User input credentials
   const [userCredentials, setUserCredentials] = React.useState<IUserAuth>({
      userName: "",
      email: "",
      password: "",
   });

   const { userName, email, password } = userCredentials;

   //Open register model form
   const handleClickOpen = (): void => {
      setOpen(true);
   };

   /**
    * @function handleClose reset alert messages, user's credentials
    * @dispatch cancel the response message
    * in order to remove Alert bar.
    */
   const handleClose = (): void => {
      setAlertInfo("");
      resetCredentials();
      setOpen(false);
      if (authResponse.registerdUserResponse.message) {
         dispatch(cancelRegisterForm());
      }
   };

   const resetCredentials = () => {
      setUserCredentials({
         userName: "",
         email: "",
         password: "",
      });
   };

   const handleChange = (event: React.FormEvent): void => {
      // const target = event.target as HTMLSelectElement
      const { name, value } = event.target as HTMLSelectElement;
      setUserCredentials({ ...userCredentials, [name]: value });
   };

   /**
    * @function handleSubmit send the user's credentials.
    * @dispatch user's credentials as an action creator.
    * @param event React.FormEvent
    * @returns void
    */
   const handleSubmit = (event: React.FormEvent): void => {
      event.preventDefault();
      if (
         userCredentials.email &&
         userCredentials.password &&
         userCredentials.userName
      ) {
         dispatch(registerUserAction(userCredentials));
         resetCredentials();
      } else {
         setAlertInfo("Please enter your credentials");
      }
   };

   return (
      <div>
         <p onClick={handleClickOpen}>Register</p>
         <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Register</DialogTitle>
            {alertInfo && alertInfo ? (
               <AlertInfo info={alertInfo} />
            ) : (
               <AlertInfo info={authResponse.registerdUserResponse?.message} />
            )}

            <DialogContent>
               <DialogContentText>
                  Please register with your email address and Password.
               </DialogContentText>
               <TextField
                  autoFocus
                  margin="dense"
                  id="username"
                  label="Username"
                  type="text"
                  fullWidth
                  variant="standard"
                  name={"userName"}
                  value={userName}
                  onChange={(e) => handleChange(e)}
                  required={true}
               />
               <TextField
                  autoFocus
                  margin="dense"
                  id="email"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="standard"
                  name={"email"}
                  value={email}
                  onChange={(e) => handleChange(e)}
                  required={true}
               />
               <TextField
                  autoFocus
                  margin="dense"
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth
                  variant="standard"
                  name={"password"}
                  value={password}
                  onChange={(e) => handleChange(e)}
                  required={true}
               />
            </DialogContent>
            <DialogActions>
               <ButtonGroup variant="text" aria-label="text button group">
                  <Button onClick={handleClose}>CANCEL</Button>
                  <Button onClick={handleSubmit}>REGISTER</Button>
               </ButtonGroup>
            </DialogActions>
         </Dialog>
      </div>
   );
}
