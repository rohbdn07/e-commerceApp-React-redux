import React from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import "./Login_register.scss";

export default function LoginRegister(): JSX.Element {
   return (
      <>
         <div className="welcome_section">
            <p>Welcome!</p>
            <div className="d-flex login_section">
               <Login />
               |
               <Register />
            </div>
         </div>
      </>
   );
}
