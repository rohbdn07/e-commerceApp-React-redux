import React from "react";
import { BsPersonFill } from "react-icons/bs";
import "./User.scss";

export default function UserProfile() {
   return (
      <>
         <div className="userprofile">
            <div className="icons">
               <div className="profile_icon">
                  <BsPersonFill />
               </div>
            </div>
         </div>
      </>
   );
}
