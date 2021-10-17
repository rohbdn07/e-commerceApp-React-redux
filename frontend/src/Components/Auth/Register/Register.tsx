import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function Register() {
   const [open, setOpen] = React.useState(false);

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <div>
         <p onClick={handleClickOpen}>Register</p>
         <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Register</DialogTitle>
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
               />
               <TextField
                  autoFocus
                  margin="dense"
                  id="email"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="standard"
               />
               <TextField
                  autoFocus
                  margin="dense"
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth
                  variant="standard"
               />
            </DialogContent>
            <DialogActions>
               <ButtonGroup variant="text" aria-label="text button group">
                  <Button onClick={handleClose}>CANCEL</Button>
                  <Button>REGISTER</Button>
               </ButtonGroup>
            </DialogActions>
         </Dialog>
      </div>
   );
}
