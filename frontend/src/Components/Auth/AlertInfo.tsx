import React from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
   props,
   ref
) {
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type PropsTypes = {
   info: string;
   status?: boolean;
};

const AlertInfo = ({ info, status }: PropsTypes) => {
   return (
      <>
         {info !== undefined ? (
            <Alert severity={status ? "success" : "warning"}>{info}</Alert>
         ) : null}
      </>
   );
};

export default AlertInfo;
