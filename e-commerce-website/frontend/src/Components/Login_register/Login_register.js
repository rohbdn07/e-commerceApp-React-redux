import React from "react";
import "./Login_register.scss";

export default function Login_register() {
   return (
      <>
         <div className="welcome_section">
            <p>Welcome!</p>
            <div className="d-flex login_section">
               <p>Signin</p>|<p>Register</p>
            </div>
         </div>
      </>
   );
}
