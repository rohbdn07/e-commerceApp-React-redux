import React from "react";
import { Link } from "react-router-dom";
import "./Logo.scss";

export default function CompanyLogo() {
   return (
      <>
         <div className="company_logo">
            <div className="company_logo_wrapper">
               <Link to="/">
                  <img src="/coollogo_com-7409163.png" alt="logo" />
               </Link>
            </div>
         </div>
      </>
   );
}
