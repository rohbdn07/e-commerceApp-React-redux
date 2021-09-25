import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import "./Topbar.scss";

interface ITopbarProps {
   shopping?: string;
   history?: any;
}

export default function Topbar(props: ITopbarProps) {
   const { shopping, history } = props;
   return (
      <>
         <div className="topbar">
            <div className="container topbar_wrapper">
               <div className="top_left">
                  {shopping ? (
                     <ul>
                        <button
                           className="btn btn-primary btn-sm"
                           onClick={() => history.push("/")}
                        >
                           <li className="previous">
                              <GrFormPrevious
                                 style={{ width: "20" }}
                                 size="1x"
                              />
                              {shopping}
                           </li>
                        </button>
                     </ul>
                  ) : (
                     <ul>
                        <li>Home</li>
                        <li>Delivery</li>
                        <li>Payment</li>
                     </ul>
                  )}
               </div>
               <div className="top_right">
                  <ul>
                     <li>Call:+35845721352</li>
                     <li>
                        <select name="language">
                           <option value="English">English</option>
                           <option value="Finnish">Finnish</option>
                        </select>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </>
   );
}
