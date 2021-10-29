import React from "react";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
   props,
   ref
) {
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AlertInfo = ({ info }: any) => {
   return (
      <>
         {info !== undefined ? <Alert severity="warning">{info}</Alert> : null}
      </>
   );
};

export default AlertInfo;
