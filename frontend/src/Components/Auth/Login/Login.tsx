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
import IUserAuth from "../../../interfaces/userAuth.interface";
import AlertInfo from "../Register/AlertInfo";
import { loginUserAction } from "../../../Redux/Action/Auth/loginUserAction";

export default function Login() {
   const [open, setOpen] = React.useState(false);
   const [alertInfo, setAlertInfo] = React.useState("");
   const dispatch = useDispatch();

   const [userLogin, setUserLogin] = React.useState<IUserAuth>({
      email: "",
      password: "",
   });

   const { email, password } = userLogin;

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const resetCredentials = () => {
      setUserLogin({
         email: "",
         password: "",
      });
   };

   const handleChange = (event: React.FormEvent): void => {
      event.preventDefault();
      const { name, value } = event.target as HTMLSelectElement;
      setUserLogin({ ...userLogin, [name]: value });
   };

   const submitHandler = () => {
      if (email && password !== "") {
         dispatch(loginUserAction(userLogin));
      } else {
         setAlertInfo("Please enter your credentials!!!");
      }
      resetCredentials();
   };

   return (
      <div>
         <p onClick={handleClickOpen}>Login</p>
         <Dialog open={open} onClose={handleClose}>
            <AlertInfo info={alertInfo} />
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
               <DialogContentText>
                  Please enter your email address and Password.
               </DialogContentText>
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
                  onChange={handleChange}
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
                  onChange={handleChange}
               />
            </DialogContent>
            <DialogActions>
               <ButtonGroup variant="text" aria-label="text button group">
                  <Button onClick={handleClose}>CANCEL</Button>
                  <Button onClick={submitHandler}>LOGIN</Button>
               </ButtonGroup>
            </DialogActions>
         </Dialog>
      </div>
   );
}
