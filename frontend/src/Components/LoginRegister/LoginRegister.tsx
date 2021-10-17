import React from "react";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import "./Login_register.scss";

export default function LoginRegister(): JSX.Element {
   return (
      <>
         <div className="welcome_section">
            <p>Welcome!</p>
            <div className="d-flex login_section">
               {/* <p>Signin</p>|<p>Register</p> */}
               <Login />
               |
               <Register />
            </div>
         </div>
      </>
   );
}
